resource "random_id" "suffix" {
  byte_length = 4
}

locals {
  bucket_name = "${var.project}-${random_id.suffix.hex}"
}

resource "aws_s3_bucket" "site" {
  bucket = local.bucket_name
  acl    = "private"

  versioning {
    enabled = true
  }

  force_destroy = true
}

# Block public access (extra safety)
resource "aws_s3_bucket_public_access_block" "block" {
  bucket = aws_s3_bucket.site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for ${var.project}"
}

# Allow CloudFront's OAI to read objects from the bucket
data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid = "AllowCloudFrontServicePrincipalReadOnly"

    principals {
      type        = "CanonicalUser"
      identifiers = [aws_cloudfront_origin_access_identity.oai.s3_canonical_user_id]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.site.arn}/*"
    ]
  }
}

resource "aws_s3_bucket_policy" "policy" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  origin {
    origin_id   = aws_s3_bucket.site.id
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id       = aws_s3_bucket.site.id
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  price_class = "PriceClass_100"
}

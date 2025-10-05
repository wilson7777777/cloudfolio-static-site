variable "aws_region" {
  description = "AWS region for regional resources (S3 ...). CloudFront/ACM for custom domain must use us-east-1."
  type        = string
  default     = "us-east-1"
}

variable "project" {
  type    = string
  default = "cloudfolio-static-site"
}

# Optional: supply a custom domain (leave empty to use CloudFront domain)
variable "domain_name" {
  type    = string
  default = ""
}

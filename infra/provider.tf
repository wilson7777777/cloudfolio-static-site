terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# For CloudFront ACM: if you later create an ACM cert, it must be in us-east-1.
# Example (if you need two providers):
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

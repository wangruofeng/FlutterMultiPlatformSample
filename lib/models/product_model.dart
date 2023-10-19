class ProductModel {
  String image;
  String productName;
  String brandName;
  String price;
  String? discountString;

  ProductModel({
    required this.image,
    required this.productName,
    required this.brandName,
    required this.price,
    this.discountString,
  });
}

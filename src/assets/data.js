import product_1_t from "@/assets/images/image-product-1-thumbnail.jpg";
import product_1 from "@/assets/images/image-product-1.jpg";
import product_2_t from "@/assets/images/image-product-2-thumbnail.jpg";
import product_2 from "@/assets/images/image-product-2.jpg";
import product_3_t from "@/assets/images/image-product-3-thumbnail.jpg";
import product_3 from "@/assets/images/image-product-3.jpg";
import product_4_t from "@/assets/images/image-product-4-thumbnail.jpg";
import product_4 from "@/assets/images/image-product-4.jpg";

const data = {
    s_1: {
        id: "s_1",
        brand: "sneaker company",
        title: "Fall Limited Edition Sneakers",
        description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: "125.00",
        discount: "50%",
        original_price: "250.00",
        imageList: [product_1, product_2, product_3, product_4],
        imageThumbnailList: [
            product_1_t,
            product_2_t,
            product_3_t,
            product_4_t,
        ],
    },
};

export default data;

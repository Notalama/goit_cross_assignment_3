import { NavigatorScreenParams } from "@react-navigation/native";
import { productsStackRoutes, tabRoutes } from "./route";

export type ProductsStackParamList = {
    [productsStackRoutes.PRODUCT_DETAILS]: undefined;
    [productsStackRoutes.PRODUCT_LIST]: undefined;
    [productsStackRoutes.CHECKOUT]: undefined;
};

export type TabsParamList = {
    [tabRoutes.CART_TAB]: NavigatorScreenParams<ProductsStackParamList>;
    [tabRoutes.EXPLORE_TAB]: undefined;
};
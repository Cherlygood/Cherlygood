"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { StickyBar } from "./ProductDetails/StickyBar";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShoppingCart } from "lucide-react";
import clsx from "clsx";
import { ProductDetailsOptions } from "./Options/ProductDetailsOptions";
import { useScrollStore } from "@/zustand/website/scrollStore";
import { useOptionsStore } from "@/zustand/website/optionsStore";
import { useNavigation } from "@/components/shared/NavigationLoadingIndicator";

export function ProductDetailsWrapper({
  children,
  cart,
  hasColor,
  hasSize,
  productInfo,
  categoriesData,
}: {
  readonly children: React.ReactNode;
  cart: CartType | null;
  hasColor: boolean;
  hasSize: boolean;
  productInfo: ProductInfoType;
  categoriesData: StoreCategoriesType | null;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { push } = useNavigation();

  const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] =
    useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const setScrollPosition = useScrollStore((state) => state.setScrollPosition);
  const resetOptions = useOptionsStore((state) => state.resetOptions);

  const itemsInCart = cart?.items.length || 0;
  const categories = categoriesData?.showOnPublicSite
    ? categoriesData.categories
    : undefined;

  useEffect(() => resetOptions(), [productInfo.id, resetOptions]);

  const handleScroll = useCallback(() => {
    if (wrapperRef.current) {
      setScrollPosition(wrapperRef.current.scrollTop);
    }
  }, [setScrollPosition]);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (!wrapperElement) return;

    wrapperElement.addEventListener("scroll", handleScroll);
    return () => wrapperElement.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target as Node)
    ) {
      setCategoriesDropdownVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const toggleCategoriesDropdown = useCallback(
    () => setCategoriesDropdownVisible((prev) => !prev),
    []
  );

  const handleCategoryClick = useCallback(
    (categoryName: string) => {
      push(`/category/${categoryName.toLowerCase()}`);
      setCategoriesDropdownVisible(false);
    },
    [push]
  );

  return (
    <div
      id="product-details-wrapper"
      ref={wrapperRef}
      className="h-screen overflow-x-hidden overflow-y-auto md:custom-scrollbar"
    >
      <nav className="w-full border-b bg-white">
        <DesktopNavbar
          itemsInCart={itemsInCart}
          categories={categories}
          toggleCategoriesDropdown={toggleCategoriesDropdown}
          isCategoriesDropdownVisible={isCategoriesDropdownVisible}
          categoriesRef={categoriesRef}
          handleCategoryClick={handleCategoryClick}
        />
      </nav>
      {children}
      <StickyBar
        productInfo={productInfo}
        optionsComponent={
          <ProductDetailsOptions
            productInfo={productInfo}
            isStickyBarInCartIndicator={true}
          />
        }
        hasColor={hasColor}
        hasSize={hasSize}
        cart={cart}
      />
      <Footer />
    </div>
  );
}

function DesktopNavbar({
  itemsInCart,
  categories,
  toggleCategoriesDropdown,
  isCategoriesDropdownVisible,
  categoriesRef,
  handleCategoryClick,
}: {
  itemsInCart: number;
  categories: CategoryType[] | undefined;
  toggleCategoriesDropdown: () => void;
  isCategoriesDropdownVisible: boolean;
  categoriesRef: React.RefObject<HTMLDivElement | null>;
  handleCategoryClick: (categoryName: string) => void;
}) {
  return (
    <div className="hidden md:flex w-full max-w-[1080px] mx-auto px-6 py-2 flex-col md:flex-row justify-between gap-1 relative">
      <div className="flex items-center gap-7">
        <Link href="/">
          <Image
            src="/cherlygood/logo.svg"
            alt="Cherlygood"
            width={220}
            height={27}
            priority
            className="mt-1"
          />
        </Link>
        <div className="flex gap-3 h-10">
          <Link
            href="/new-arrivals"
            className="active:bg-lightgray lg:hover:bg-lightgray h-10 text-sm font-semibold px-2 rounded-full flex items-center transition duration-300 ease-in-out"
          >
            New Arrivals
          </Link>
          {categories && categories.length > 0 && (
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={toggleCategoriesDropdown}
                className={clsx(
                  "active:bg-lightgray lg:hover:bg-lightgray h-10 text-sm font-semibold px-2 rounded-full flex items-center transition duration-300 ease-in-out",
                  isCategoriesDropdownVisible && "bg-lightgray"
                )}
              >
                <span>Categories</span>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`-mr-1 transition-transform duration-300 ${
                    isCategoriesDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCategoriesDropdownVisible && (
                <div className="w-36 absolute top-[48px] left-0 z-20 py-2 rounded-md shadow-dropdown bg-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-white before:rounded-tl-[2px] before:rotate-45 before:origin-top-left before:absolute before:-top-2 before:border-l before:border-t before:border-[#d9d9d9] before:left-10 min-[840px]:before:right-24">
                  {categories.map((category) => (
                    <button
                      key={category.index}
                      onClick={() => handleCategoryClick(category.name)}
                      className="block w-full text-left px-5 py-2 text-sm font-semibold transition duration-300 ease-in-out active:bg-lightgray lg:hover:bg-lightgray"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <Link
            href="/track-order"
            className="active:bg-lightgray lg:hover:bg-lightgray h-10 text-sm font-semibold px-2 rounded-full flex items-center transition duration-300 ease-in-out"
          >
            Track Order
          </Link>
        </div>
      </div>
      <div className="absolute right-4 top-2 md:relative md:right-auto md:top-auto w-max h-10 flex items-center justify-end">
        <Link
          href="/cart"
          className="relative h-11 w-11 rounded-full flex items-center justify-center ease-in-out transition duration-300 active:bg-lightgray lg:hover:bg-lightgray"
          aria-label="View cart"
          title="View cart"
        >
          <ShoppingCart strokeWidth={2.5} />
          {itemsInCart > 0 && (
            <span className="absolute top-[4px] left-[30px] min-w-5 w-max h-5 px-1 rounded-full text-sm font-medium flex items-center justify-center text-white bg-red">
              {itemsInCart}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

// -- UI Components --

function Footer() {
  return (
    <footer className="w-full pt-6 pb-24 mt-14 bg-lightgray">
      <div className="md:hidden max-w-[486px] px-5 mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="block text-sm mb-3">
              Subscribe to our newsletter <br /> for exclusive deals and updates
            </h4>
            <div className="relative h-11 w-[270px]">
              <button className="peer w-[104px] h-[40px] absolute left-[164px] top-1/2 -translate-y-1/2 rounded font-semibold text-white">
                Subscribe
              </button>
              <div className="peer-hover:bg-[#cc8100] peer-hover:[background:linear-gradient(to_bottom,_#cc8100_5%,_#e29000_100%)] peer-active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.14)] w-full h-full p-[2px] rounded-lg shadow-[inset_0px_1px_0px_0px_#ffa405] [background:linear-gradient(to_bottom,_#e29000_5%,_#cc8100_100%)] bg-[#e29000]">
                <input
                  className="w-40 h-[40px] px-3 rounded-md"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Link
                href="/about-us"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                About us
              </Link>
              <Link
                href="/privacy-policy"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms-of-use"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                Terms of use
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Help</h3>
              <Link
                href="/contact-us"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                Contact us
              </Link>
              <Link
                href="#"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                Track order
              </Link>
              <Link
                href="/returns-and-refunds"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                Returns & refunds
              </Link>
              <Link
                href="/faq"
                className="block w-max text-sm text-gray mb-2 hover:underline"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full max-w-[1040px] px-9 mx-auto">
        <div className="flex gap-10">
          <div className="w-full">
            <h3 className="font-semibold mb-4">Company</h3>
            <Link
              href="/about-us"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              About us
            </Link>
            <Link
              href="/privacy-policy"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms-of-use"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              Terms of use
            </Link>
          </div>
          <div className="w-full">
            <h3 className="font-semibold mb-4">Get Help</h3>
            <Link
              href="/contact-us"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              Track order
            </Link>
            <Link
              href="/returns-and-refunds"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              Returns & refunds
            </Link>
            <Link
              href="/faq"
              className="block w-max text-sm text-gray mb-2 hover:underline"
            >
              FAQs
            </Link>
          </div>
          <div className="min-w-[270px]">
            <h4 className="block text-sm mb-3">
              Subscribe to our newsletter <br /> for exclusive deals and updates
            </h4>
            <div className="relative h-11 w-[270px]">
              <button className="peer w-[104px] h-[40px] absolute left-[164px] top-1/2 -translate-y-1/2 rounded font-semibold text-white">
                Subscribe
              </button>
              <div className="peer-hover:bg-[#cc8100] peer-hover:[background:linear-gradient(to_bottom,_#cc8100_5%,_#e29000_100%)] peer-active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.14)] w-full h-full p-[2px] rounded-lg shadow-[inset_0px_1px_0px_0px_#ffa405] [background:linear-gradient(to_bottom,_#e29000_5%,_#cc8100_100%)] bg-[#e29000]">
                <input
                  className="w-40 h-[40px] px-3 rounded-md"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// -- Type Definitions --

type ProductInfoType = {
  id: string;
  name: string;
  pricing: {
    basePrice: number;
    salePrice: number;
    discountPercentage: number;
  };
  images: {
    main: string;
    gallery: string[];
  };
  options: {
    colors: Array<{
      name: string;
      image: string;
    }>;
    sizes: {
      inches: {
        columns: Array<{ label: string; order: number }>;
        rows: Array<{ [key: string]: string }>;
      };
      centimeters: {
        columns: Array<{ label: string; order: number }>;
        rows: Array<{ [key: string]: string }>;
      };
    };
  };
  upsell: {
    id: string;
    mainImage: string;
    pricing: {
      basePrice: number;
      salePrice: number;
      discountPercentage: number;
    };
    visibility: "DRAFT" | "PUBLISHED" | "HIDDEN";
    createdAt: string;
    updatedAt: string;
    products: Array<{
      id: string;
      name: string;
      slug: string;
      basePrice: number;
      images: {
        main: string;
        gallery: string[];
      };
      options: {
        colors: Array<{
          name: string;
          image: string;
        }>;
        sizes: {
          inches: {
            columns: Array<{ label: string; order: number }>;
            rows: Array<{ [key: string]: string }>;
          };
          centimeters: {
            columns: Array<{ label: string; order: number }>;
            rows: Array<{ [key: string]: string }>;
          };
        };
      };
    }>;
  };
};

type CategoryType = {
  index: number;
  name: string;
  image: string;
  visibility: "VISIBLE" | "HIDDEN";
};

type StoreCategoriesType = {
  showOnPublicSite: boolean;
  categories: CategoryType[];
};

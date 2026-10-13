window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("fade-out");
    }, 1200);
});

const cartCountSpan = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const productCards = document.querySelectorAll(".product-card");
const cartBtn = document.getElementById("cart-btn");
const heroShopBtn = document.getElementById("hero-shop-btn");
const heroExploreBtn = document.getElementById("hero-explore-btn");
const aboutReadMoreBtn = document.getElementById("about-read-more");
const hiddenContent = document.getElementById("hidden-content");
const sortSelect = document.getElementById("sort-select");
const productGrid = document.getElementById("product-grid");
const contentSections = document.querySelectorAll(".content-section");

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        button.textContent = "Added";
        button.style.backgroundColor = "#fa541c";
        
        setTimeout(() => {
            button.textContent = "Add";
            button.style.backgroundColor = "#111";
        }, 1500);
    });
});

productCards.forEach(card => {
    card.addEventListener("click", () => {
        productCards.forEach(c => {
            c.style.transform = "translateY(0)";
            c.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
        });
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 30px rgba(250,84,28,0.2)";
    });
});

contentSections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.transform = "scale(1.01)";
        section.style.backgroundColor = "#fafafa";
    });
    section.addEventListener("mouseleave", () => {
        section.style.transform = "scale(1)";
        section.style.backgroundColor = "";
    });
});

sortSelect.addEventListener("change", () => {
    const cardsArray = Array.from(productCards);
    const sortValue = sortSelect.value;

    cardsArray.sort((a, b) => {
        const priceA = parseInt(a.getAttribute("data-price"));
        const priceB = parseInt(b.getAttribute("data-price"));

        if (sortValue === "price-low") {
            return priceA - priceB;
        } else if (sortValue === "price-high") {
            return priceB - priceA;
        } else {
            return parseInt(a.getAttribute("data-card-id")) - parseInt(b.getAttribute("data-card-id"));
        }
    });

    cardsArray.forEach(card => productGrid.appendChild(card));
});

aboutReadMoreBtn.addEventListener("click", () => {
    hiddenContent.classList.toggle("show");
    if (hiddenContent.classList.contains("show")) {
        aboutReadMoreBtn.textContent = "Show Less";
    } else {
        aboutReadMoreBtn.textContent = "Learn More";
    }
});

cartBtn.addEventListener("click", () => {
    alert("Sizning savatingizda " + cartCount + " ta mahsulot mavjud.");
});

heroShopBtn.addEventListener("click", () => {
    const shopSection = document.getElementById("shop");
    shopSection.scrollIntoView({ behavior: "smooth" });
});

heroExploreBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
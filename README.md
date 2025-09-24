# Scroll-Animated-website


### **Description**

This project is a dynamic, single-page website demonstrating a **scroll-triggered content animation** effect, often referred to as "Scroll Reveal." The page features a long-scrolling series of articles, each containing an image and placeholder text, all set against a beautiful, animated gradient background.

The core functionality involves using **JavaScript** to detect when an article scrolls into the viewport, which then triggers a **CSS transition** to slide the content smoothly onto the screen.

---

### **Key Features**

#### **1. Animated Background (CSS)**
* **Gradient:** The `body` uses a `linear-gradient` with four bright colors (`#00bfff`, `#ff516b`, `#101088d5`, `#38ff06`) to create a vibrant background.
* **Animation:** An infinite `@keyframes ani` animation is applied, which continuously shifts the `background-position` of the gradient across $16$ seconds, creating a subtle, mesmerizing color shift effect.

#### **2. Scroll Reveal Animation (CSS & JavaScript)**
* **Initial State (CSS):** Every `.article` element is initially hidden by being translated far off-screen:
    * Odd-numbered articles are translated **$200vw$ to the right** (`translateX(200vw)`).
    * Even-numbered articles are translated **$200vw$ to the left** (`translateX(-200vw)`).
    * A smooth transition (`transition: all 0.6s ease-in`) is set up for the reveal effect.
* **Scroll-Triggered Reveal (JavaScript):**
    * The script listens for the global `scroll` event.
    * The `animated()` function calculates a **trigger point** at **70% of the viewport height** (`window.innerHeight * 0.7`).
    * It iterates through all articles and checks if the **top edge of the article** is above the trigger point (`Top < end`).
    * When the condition is met, the class `.show` is added.
* **Final State (CSS):** The `.article.show` class overrides the initial transform, setting `transform: translateX(0vw)`, which smoothly **slides the article into its final on-screen position**.

#### **3. Content Structure and Styling (HTML & CSS)**
* **Articles:** The content is divided into multiple `.article` sections, each with a main heading (`h2`), several paragraphs (`p`), and an image (`img`).
* **Image Floating:** Images are designed for a magazine-style layout:
    * Images in **odd-numbered articles float left**.
    * Images in **even-numbered articles float right**, creating an alternating, visually balanced presentation.
* **Responsiveness:** The layout uses `@media` queries to ensure a good experience on all devices:
    * On **Mobile Devices** (`max-width: 576px`), the images are set to **$100\%$ width** and no longer float, stacking the image and text vertically for easier reading.
    * On **Tablets and Desktops**, the image width and floating behavior are maintained for a two-column effect.

document.addEventListener("DOMContentLoaded", function () {
    const cursorHalo = document.querySelector(".cursor-halo");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursorHalo, { duration: 0, left: e.clientX - 400, top: e.clientY - 400, ease: "power2.out" });
    });

    // Show cursor halo on mouseenter
    document.addEventListener("mouseenter", () => {
        gsap.to(cursorHalo, { duration: 0.3, scale: 1, ease: "power2.out" });
    });

    // Hide cursor halo on mouseleave
    document.addEventListener("mouseleave", () => {
        gsap.to(cursorHalo, { duration: 0.3, scale: 0, ease: "power2.out" });
    });
});
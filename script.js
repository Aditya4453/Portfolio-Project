var tl=gsap.timeline()
tl.from("#p1",{
        x:-1200,
        duration:0.5,
               
})
tl.from("#p2",{
        x:-1200,
        duration:1,
        
        
})
tl.from("#p3",{
        x:-1200,
        duration:1,
        
})
tl.from("#p4",{
        x:-1200,
        duration:1,
        
})
tl.to(".page1", {
        y: "-100%",
        duration: 0.8,
        // delay: 2, Allow time for the first animation
        //   // Step 3: Show the main content and reset body scroll
        //   document.querySelector("#navbar").style.display = "block";
        //   document.body.style.overflow = "auto";
        // },
        onComplete: () => {
                const overlay = document.querySelector(".page1");
                if (overlay) {
                        overlay.style.display = "none"; // Hide the overlay completely
                        // Alternatively, you can remove it from the DOM:
                        // overlay.remove();
                }

                // Show main content and enable scrolling
                const navbar = document.querySelector("#navbar");
                const page2 = document.querySelector(".page2");
                const page3 = document.querySelector(".page3");
                const page4 = document.querySelector(".page4");
                if (navbar) {
                        navbar.style.display = "flex";
                        page2.style.display="flex";
                        page3.style.display="flex";
                        page4.style.display="flex";
                        // document.body.style.overflow = "auto";
        }}});


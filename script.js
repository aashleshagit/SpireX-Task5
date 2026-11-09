
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Web Designer",
        message: "This service exceeded my expectations. The experience was amazing!",
        photo: "https://i.pravatar.cc/100?img=47",
        rating: "★★★★★"
    },
    {
        name: "Rahul Sharma",
        role: "Software Developer",
        message: "Excellent service and a wonderful experience. I highly recommend it!",
        photo: "https://i.pravatar.cc/100?img=12",
        rating: "★★★★★"
    },
    {
        name: "Emily Brown",
        role: "Business Analyst",
        message: "The team was professional, helpful and delivered great results!",
        photo: "https://i.pravatar.cc/100?img=44",
        rating: "★★★★★"
    }
];

let currentIndex = 0;

function showTestimonial(index) {

    const testimonial = testimonials[index];

    document.getElementById("name").textContent =
        testimonial.name;

    document.getElementById("role").textContent =
        testimonial.role;

    document.getElementById("message").textContent =
        '"' + testimonial.message + '"';

    document.getElementById("photo").src =
        testimonial.photo;

    document.getElementById("stars").textContent =
        testimonial.rating;

    document.getElementById("counter").textContent =
        (index + 1) + " / " + testimonials.length;
}

// Next button
document.getElementById("next").addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    showTestimonial(currentIndex);
});

// Previous button
document.getElementById("prev").addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }

    showTestimonial(currentIndex);
});

// Display first testimonial
showTestimonial(currentIndex);

// আপনার হোয়াটসঅ্যাপ নম্বরটি এখানে লিখুন (যেমন: 8801700000000)
const whatsappNumber = "8801700000000"; 

document.addEventListener("DOMContentLoaded", function() {
    const waButtons = document.querySelectorAll('.wa-btn');

    waButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            let text = "Hi Zenvora Agency! I need assistance with your Cyber & Social Media Services.";
            
            // কার্ডের নাম চেক করে কাস্টম বার্তা পাঠানো
            const cardHeader = this.parentElement.querySelector('h3');
            if (cardHeader) {
                text = `Hi Zenvora Agency! I need help with: *${cardHeader.innerText}*`;
            }

            const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
            window.open(waUrl, '_blank');
        });
    });
});

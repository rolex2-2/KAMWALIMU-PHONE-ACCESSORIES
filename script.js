const products = [
{ name: "itel2166", price: 1500, img: "images/itel2166.PNG" },
{ name: "itel2166.", price: 1500, img: "images/itel2166..PNG" },
{ name: "itel2163", price: 1300, img: "images/itel2163.PNG" },
{ name: "V110", price: 1400, img: "images/V110.PNG" },
{ name: "F+ 240L", price: 1400, img: "images/F+ 240L.PNG" },
{ name: "momofly M312E", price: 1200, img: "images/momofly M312E.PNG" },
{ name: "3-Way Extension Socket with USB-C & USB-A Charging", price: 500, img: "images/3-Way Extension Socket with USB-C & USB-A Charging.PNG" },
{ name: "Amaya Charger 2.4A-ACW-U39S-M26", price: 450, img: "images/Amaya Charger 2.4A-ACW-U39S-M26.PNG" },
{ name: "Amaya Type C Fast Charger, for Android Charger, Samsung Phone", price: 200, img: "images/Amaya Type C Fast Charger, for Android Charger, Samsung Phone.PNG" },
{ name: "Awei A600BL Stereo Bluetooth headphones for the best price", price: 800, img: "images/Awei A600BL Stereo Bluetooth headphones for the best price.PNG" },
{ name: "Caston C15 Bluetooth Speaker", price: 1300, img: "images/Caston C15 Bluetooth Speaker.PNG" },
{ name: "Ceramic Privacy Unbreakable", price: 400, img: "images/Ceramic Privacy Unbreakable.PNG" },
{ name: "DONFANLIA Large Capacity Sport Neckband Bluetooth Stereo Headphones", price: 400, img: "images/DONFANLIA Large Capacity Sport Neckband Bluetooth Stereo Headphones.PNG" },
{ name: "Electric Voltage Tester Pocket Pen Screwdriver", price: 100, img: "images/Electric Voltage Tester Pocket Pen Screwdriver.PNG" },
{ name: "F9 Bluetooth Earphone 2000mAh Battery Headset XL", price: 1000, img: "images/F9 Bluetooth Earphone 2000mAh Battery Headset XL.PNG" },
{ name: "Fancy Mobile Cover Glitter Fancy Mobile Case", price: 400, img: "images/Fancy Mobile Cover Glitter Fancy Mobile Case.PNG" },
{ name: "hardcover", price: 400, img: "images/hardcover.PNG" },
{ name: "Immersible Electric Mini Water Heater Coil", price: 150, img: "images/Immersible Electric Mini Water Heater Coil.PNG" },
{ name: "JBL Boombox Portable Bluetooth Speaker", price: 1600, img: "images/JBL Boombox Portable Bluetooth Speaker.PNG" },
{ name: "M10 Wireless Bluetooth 5.1 Earpods Earphones Earbuds Dual LED Display", price: 1000, img: "images/M10 Wireless Bluetooth 5.1 Earpods Earphones Earbuds Dual LED Display..PNG" },
{ name: "M19 Wireless Music Headphones LED Display", price: 1000, img: "images/M19 Wireless Music Headphones LED Display.PNG" },
{ name: "Mirror Tempered Glass Screen Protector", price: 350, img: "images/Mirror Tempered Glass Screen Protector.PNG" },
{ name: "Normal Glass Screen Protector (All Models)", price: 100, img: "images/Normal Glass Screen Protector (All Models).PNG" },
{ name: "normal phone cover", price: 250, img: "images/normal phone cover.PNG" },
{ name: "Oraimo Micro-USB Charger", price: 400, img: "images/Oraimo Micro-USB Charger.PNG" },
{ name: "Oraimo OBS-75D Boom Bass Speaker", price: 1200, img: "images/Oraimo OBS-75D Boom Bass Speaker.PNG" },
{ name: "Original Samsung 15W Fast Charger", price: 650, img: "images/Original Samsung 15W Fast Charger.PNG" },
{ name: "OTG cable", price: 250, img: "images/OTG cable.PNG" },
{ name: "Phone Screen Protectors Glass 3D(ALL MODELS)", price: 200, img: "images/Phone Screen Protectors Glass 3D(ALL MODELS).PNG" },
{ name: "promate High Definition ANC Wireless Neckband - Phone Shop", price: 200, img: "images/promate High Definition ANC Wireless Neckband - Phone Shop.PNG" },
{ name: "Smart Phone Cover Case", price: 800, img: "images/Smart Phone Cover Case.PNG" },
{ name: "TG Bluetooth Speakers T&G TG117 With Radio FM USBport", price: 800, img: "images/TG Bluetooth Speakers T&G TG117 With Radio FM USBport.PNG" },
{ name: "TV Antenna Aerial", price: 800, img: "images/TV Antenna Aerial.PNG" },
{ name: "TWS Earpods Airpods Pro3 Bluetooth Headsets Wireless Pods Pro Earpods, Earphones.", price: 600, img: "images/TWS Earpods Airpods Pro3 Bluetooth Headsets Wireless Pods Pro Earpods, Earphones..PNG" },
{ name: "2GB memory card", price: 450, img: "images/2GB memory card.PNG" },
{ name: "4GB memory card", price: 600, img: "images/4GB memory card.PNG" },
{ name: "16GB flash drive", price: 1000, img: "images/16GB flash drive.PNG" },
{ name: "32GB memory card", price: 750, img: "images/32GB memory card.PNG" },
{ name: "16GB memory card", price: 700, img: "images/16GB memory card.PNG" },
{ name: "64GB memory card", price: 850, img: "images/64GB memory card.PNG" },
{ name: "32GB USB 2.0 Flash Drive", price: 1000, img: "images/32GB USB 2.0 Flash Drive.PNG" },
{ name: "USB Flash Drive FM64GB", price: 1300, img: "images/USB Flash Drive FM64GB.PNG" },
{ name: "Itel battery", price: 500, img: "images/Itel battery.PNG" },
{ name: "Safaricom line (Original National ID is a must)", price: 100, img: "images/Safaricom line.PNG" },
{ name: "Airtel SIM Card (Original National ID is a must)", price: 50, img: "images/Airtel SIM Card.PNG" },
{ name: "DP bulb multi colour", price: 200, img: "images/DP bulb multi colour.jpeg" },
{ name: "DP light rechargeable", price: 400, img: "images/DP light rechargeable.jpeg" },
{ name: "Earphones", price: 250, img: "images/Earphones.jpeg" },
{ name: "Gass burner", price: 250, img: "images/Gass burner.jpeg" },
{ name: "images/Hero 10. 25BI battery size, dual sim", price: 1500, img: "images/Hero 10. 25BI battery size, dual sim.jpeg" },
{ name: "Orimo sterio headphones", price: 100, img: "images/Orimo sterio headphones.jpeg" },
{ name: "P47 wireless headphone", price: 700, img: "images/P47 wireless headphone.jpeg" },
{ name: "TV wall mount", price: 700, img: "images/TV wall mount.jpeg" },
{ name: "WIRELESS SPEAKER CASTON", price: 900, img: "images/WIRELESS SPEAKER CASTON.jpeg" },
{ name: "DP bulb holder", price: 100, img: "images/DP bulb holder.jpeg" },
{ name: "Auddy 70mm top security lock", price: 700, img: "images/Auddy 70mm top security lock.jpeg" },
{ name: "itel 2165", price: 1350, img: "images/itel 2165.jpeg" },
{ name: "Itel 2163", price: 1300, img: "images/Itel 2163.jpeg" },
{ name: "Itel 2160", price: 1500, img: "images/Itel 2160.jpeg" },
{ name: "Oraimo Bluetooth earpod", price: 750, img: "images/Oraimo Bluetooth earpod.jpeg" },
{ name: "Sterio earphone", price: 200, img: "images/Sterio earphone.jpeg" },
{ name: "Type C earphone", price: 500, img: "images/Type C earphone.jpeg" },
];

const container = document.getElementById('products-container');
const phone = "254716652848"; // CHANGE THIS TO YOUR REAL NUMBER!!!

products.forEach(p => {
    const card = `
        <div class="col">
            <div class="card h-100 position-relative shadow-sm">
                ${p.discount ? `<span class="discount-badge">${p.discount}</span>` : ''}
                ${p.hot ? `<span class="discount-badge bg-warning">HOT</span>` : ''}
                <img src="${p.img}" class="card-img-top" alt="${p.name}">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold">${p.name}</h6>
                    ${p.oldPrice ? `<p class="old-price">KSh ${p.oldPrice}</p>` : ''}
                    <p class="price mt-auto">KSh ${p.price}</p>
                    <a href="https://wa.me/${phone}?text=Hi%20Kamwalimu!%20I%20want:%20${encodeURIComponent(p.name)}%20-%20KSh%20${p.price}" 
                       class="btn btn-whatsapp mt-2" target="_blank">
                        <i class="fab fa-whatsapp"></i> Order Now
                    </a>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += card;
});
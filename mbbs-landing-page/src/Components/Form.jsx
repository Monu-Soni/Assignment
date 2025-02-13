import { useState } from "react";

const Destinations = ["Russia", "Uzbekistan", "kazakhstan", "Philippines", "Georgia", "Kyrgyztan", "Egypt",]

const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", option: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We’ll contact you soon.`);
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <section className="px-6 py-12 text-center">
            <h2 className="pb-4 font-semibold text-2xl">Get Free Counseling</h2>
            <div className="bg-white shadow-lg mx-auto p-6 border border-gray-200 rounded-2xl max-w-md">
                <h2 className="font-bold text-blue-600 text-2xl text-center">Apply for MBBS Abroad</h2>
                <p className="mt-2 text-gray-500 text-center">Get expert guidance for free!</p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name"
                        required className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />

                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />

                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />

                    <select className="mb-4 p-3 border rounded w-full" name="conteries" id="">
                        {Destinations.map((data, index) => (
                            <option key={index} value="">{data}</option>
                        ))}
                    </select>

                    <button type="submit"
                        className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full font-semibold text-white transition-all animate-bounce duration-300">
                        Apply Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;
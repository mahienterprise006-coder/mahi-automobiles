import { useState, useEffect } from "react";

const initialProducts = {
  Horns: [
    {
      name: "Hella Red Grill Horn",
      sku: "HL-HRN-001",
      vehicle: "Universal",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Hella Twin Tone Horn",
      sku: "HL-HRN-002",
      vehicle: "Cars & SUVs",
      price: "₹1,899",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  Filters: [
    {
      name: "Hella Oil Filter",
      sku: "HL-FLT-110",
      vehicle: "Hyundai / Maruti",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  Lighting: [
    {
      name: "Hella LED Headlight",
      sku: "HL-LGT-210",
      vehicle: "Universal",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export default function App() {
  const [hellaProducts, setHellaProducts] = useState(() => {
    const savedProducts = localStorage.getItem("mahi-products");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [newProduct, setNewProduct] = useState({
    category: "Horns",
    name: "",
    sku: "",
    vehicle: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem("mahi-products", JSON.stringify(hellaProducts));
  }, [hellaProducts]);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    const productToAdd = {
      name: newProduct.name,
      sku: newProduct.sku || `HL-${Date.now()}`,
      vehicle: newProduct.vehicle || "Universal",
      price: newProduct.price,
      image:
        newProduct.image ||
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    };

    setHellaProducts((prev) => ({
      ...prev,
      [newProduct.category]: [
        ...(prev[newProduct.category] || []),
        productToAdd,
      ],
    }));

    setNewProduct({
      category: "Horns",
      name: "",
      sku: "",
      vehicle: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HEADER */}
      <header className="bg-[#0d1b2a] text-white sticky top-0 z-50 shadow-2xl border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-wider text-yellow-400">
              Mahi Enterprise
            </h1>

            <p className="text-gray-300 mt-1">
              HELLA Auto Parts • Premium Car Service
            </p>
          </div>

          <div className="hidden md:flex gap-8 font-semibold">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>

            <a href="#products" className="hover:text-yellow-400">
              Products
            </a>

            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>

            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </div>

          <a
            href="https://web.whatsapp.com/send?phone=919678354479"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-yellow-500"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
              AUTHORIZED HELLA PRODUCTS
            </span>

            <h2 className="text-6xl font-extrabold leading-tight mt-6 mb-6">
              Premium Automotive Parts & Car Service
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Genuine HELLA spare parts, diagnostics, electrical solutions,
              denting & painting, servicing, and premium automotive care.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold shadow-xl"
              >
                Explore Products
              </a>

              <a
                href="tel:+919678354479"
                className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt="Automotive"
              className="rounded-[40px] shadow-2xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-6xl font-extrabold text-[#0d1b2a] mb-4">
              HELLA Product Catalog
            </h2>

            <p className="text-xl text-gray-600">
              Professional automotive product showcase inspired by premium
              distributor websites.
            </p>
          </div>

          <div className="space-y-20">
            {Object.entries(hellaProducts).map(([category, products]) => (
              <div key={category}>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-4xl font-extrabold text-[#0d1b2a]">
                    {category}
                  </h3>

                  <span className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold shadow">
                    Genuine HELLA
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {products.map((item) => (
                    <div
                      key={item.sku}
                      className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-8">
                        <span className="bg-[#ffd000] text-black text-xs px-4 py-2 rounded-full font-extrabold shadow">
                          HELLA
                        </span>

                        <h4 className="text-3xl font-extrabold mt-5 mb-4 leading-tight">
                          {item.name}
                        </h4>

                        <div className="space-y-2 text-gray-600 mb-6">
                          <p>
                            <span className="font-bold">Part No:</span>{" "}
                            {item.sku}
                          </p>

                          <p>
                            <span className="font-bold">Suitable For:</span>{" "}
                            {item.vehicle}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <p className="text-4xl font-extrabold">
                            {item.price}
                          </p>

                          <span className="text-green-600 font-bold">
                            In Stock
                          </span>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="https://web.whatsapp.com/send?phone=919678354479"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#0d1b2a] text-white py-4 rounded-2xl text-center font-bold hover:bg-black"
                          >
                            Enquire
                          </a>

                          <button className="flex-1 border border-black py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition-all">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ADD PRODUCT PANEL */}
          <div className="mt-24 bg-[#0d1b2a] rounded-[40px] p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-5xl font-extrabold mb-6">
                  Add New HELLA Products
                </h3>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Expand your product catalog category-wise without coding.
                </p>
              </div>

              <div className="bg-white text-black rounded-[30px] p-8">
                <div className="space-y-5">
                  <select
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        category: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  >
                    <option>Horns</option>
                    <option>Filters</option>
                    <option>Lighting</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  />

                  <input
                    type="text"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        price: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  />

                  <input
                    type="text"
                    placeholder="Vehicle Compatibility"
                    value={newProduct.vehicle}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        vehicle: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  />

                  <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        image: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4"
                  />

                  <button
                    onClick={addProduct}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 py-4 rounded-2xl font-extrabold text-lg"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-100 rounded-[40px] p-12 shadow-xl">
            <h2 className="text-5xl font-extrabold text-[#0d1b2a] mb-10">
              Contact Mahi Enterprise
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-lg">
              <div>
                <p className="font-bold mb-2">Phone</p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="tel:+919678354479"
                    className="bg-black text-white px-6 py-3 rounded-2xl font-bold"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://web.whatsapp.com/send?phone=919678354479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div>
                <p className="font-bold mb-2">Address</p>

                <p className="text-gray-700">
                  Hatkhwapara
                  <br />
                  Azara, Guwahati, ASSAM 781017
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1b2a] text-white py-14 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-400">
              Mahi Enterprise
            </h3>

            <p className="text-gray-300 mt-2">
              HELLA Auto Parts • Premium Automotive Solutions
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

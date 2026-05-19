import { useEffect, useState } from "react";
const initialProducts = {
  Horns: [
    {
      name: "Hella Red Grill Horn",
      sku: "HL-HRN-001",
      vehicle: "Universal",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  Filters: [
    {
      name: "Hella Oil Filter",
      sku: "HL-FLT-001",
      vehicle: "Hyundai / Maruti",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  Lighting: [
    {
      name: "Hella LED Headlight",
      sku: "HL-LGT-001",
      vehicle: "Universal",
      price: "₹3999",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export default function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("mahi-products");
    return saved ? JSON.parse(saved) : initialProducts;
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
    localStorage.setItem("mahi-products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Enter product name and price");
      return;
    }

    const product = {
      name: newProduct.name,
      sku: newProduct.sku,
      vehicle: newProduct.vehicle,
      price: newProduct.price,
      image:
        newProduct.image ||
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    };

    setProducts((prev: any) => ({
      ...prev,
      [newProduct.category]: [
        ...(prev[newProduct.category] || []),
        product,
      ],
    }));

    alert("Product Added");

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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black text-white p-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Mahi Enterprise</h1>

          <p className="text-gray-300 mt-2">
            Auto Spares & Service Center
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="tel:+919678354479"
            className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919678354479"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-5 py-3 rounded-xl font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-white py-20 px-6 text-center">
        <h2 className="text-6xl font-extrabold mb-6">
          Genuine HELLA Auto Parts
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Premium automotive spares, service and accessories for all vehicles.
        </p>
      </div>

      {/* Add Product */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 mt-10">
        <h3 className="text-4xl font-bold mb-8">
          Add Products Without Coding
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <select
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                category: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
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
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="SKU"
            value={newProduct.sku}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                sku: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Vehicle"
            value={newProduct.vehicle}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                vehicle: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
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
            className="border p-4 rounded-xl"
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
            className="border p-4 rounded-xl"
          />
        </div>

        <button
          onClick={addProduct}
          className="mt-8 bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-2xl font-bold text-xl"
        >
          Add Product
        </button>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {Object.entries(products).map(([category, items]: any) => (
          <div key={category} className="mb-20">
            <h2 className="text-5xl font-bold mb-10">{category}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {items.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-3xl font-bold mb-3">
                      {item.name}
                    </h3>

                    <p className="text-gray-600 mb-2">
                      SKU: {item.sku}
                    </p>

                    <p className="text-gray-600 mb-2">
                      Vehicle: {item.vehicle}
                    </p>

                    <p className="text-4xl font-extrabold mb-5">
                      {item.price}
                    </p>

                    <div className="flex gap-3">
                      <a
                        href="tel:+919678354479"
                        className="flex-1 bg-black text-white py-3 rounded-xl text-center font-bold"
                      >
                        Call
                      </a>

                      <a
                        href="https://wa.me/919678354479"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 text-white py-3 rounded-xl text-center font-bold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Mahi Enterprise</h3>

        <p className="text-gray-300">
          Hatkhwapara, Azara, Guwahati, ASSAM 781017, India
        </p>

        <p className="text-gray-300 mt-2">
          Phone: +91 9678354479
        </p>
      </div>
    </div>
  );
}

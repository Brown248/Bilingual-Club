// src/app/admin/page.tsx
export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-brand-black mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1: Total Sales */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-brand-black">฿125,400</div>
          <div className="text-brand-green text-sm mt-2 font-bold">+12% from last month</div>
        </div>

        {/* Card 2: Students */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Active Students</div>
          <div className="text-3xl font-bold text-brand-black">1,240</div>
          <div className="text-brand-orange text-sm mt-2 font-bold">+5 new today</div>
        </div>

        {/* Card 3: Courses Sold */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Courses Sold</div>
          <div className="text-3xl font-bold text-brand-black">850</div>
        </div>

        {/* Card 4: Pending Orders */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-2">Pending Orders</div>
          <div className="text-3xl font-bold text-brand-red">12</div>
          <div className="text-xs text-gray-400 mt-2">Requires attention</div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-brand-black mb-6">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-sm">
                <th className="pb-4 font-medium">Order ID</th>
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Product</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-gray-50 last:border-none hover:bg-gray-50 transition">
                  <td className="py-4 text-gray-600">#ORD-00{i}</td>
                  <td className="py-4 font-medium text-brand-black">Student Name {i}</td>
                  <td className="py-4 text-gray-600">IELTS Intensive Prep</td>
                  <td className="py-4 font-bold">฿4,500</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${i % 2 === 0 ? 'bg-green-100 text-brand-green' : 'bg-yellow-100 text-brand-orange'}`}>
                      {i % 2 === 0 ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
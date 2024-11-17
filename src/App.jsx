import { ChartLine, Gear, House, Wallet } from "phosphor-react"
import './index.css'

function App() {
    return (
        <>
            <div className="flex h-screen bg-gray-100 w-full ">
                {/* Sidebar */}
                <div className="flex flex-col w-64 bg-white shadow-lg">
                    <div className="flex items-center justify-center shadow-md">
                        <h1 className="text-2xl font-bold text-purple-600 p-6">Mahi's Finance</h1>
                    </div>
                    <div className="flex flex-col flex-1 p-4 space-y-4">
                        <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                            <House className="text-xl mr-3" />
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                            <Wallet className="text-xl mr-3" />
                            Transactions
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                            <ChartLine className="text-xl mr-3" />
                            Analytics
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                            <Gear className="text-xl mr-3" />
                            Settings
                        </a>
                    </div>
                </div>

                {/* Main Content */}                
                <div className="flex-1 overflow-auto">
                    <header className="bg-white shadow-sm">
                        <div className="flex items-center justify-between px-8 py-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                            <div className="flex items-center space-x-4">
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                    <i className="ph-plus mr-2"></i>
                                    Add Transaction
                                </button>
                            </div>
                        </div>
                    </header>

                    <main className="p-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-gray-500">Total Balance</h3>
                                    <i className="ph-money text-2xl text-purple-600"></i>
                                </div>
                                <p className="text-3xl font-bold text-gray-800">$24,500</p>
                                <span className="text-green-500 text-sm">+2.5% from last month</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-gray-500">Income</h3>
                                    <i className="ph-arrow-up-right text-2xl text-green-500"></i>
                                </div>
                                <p className="text-3xl font-bold text-gray-800">$8,200</p>
                                <span className="text-green-500 text-sm">+5.2% from last month</span>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-gray-500">Expenses</h3>
                                    <i className="ph-arrow-down-right text-2xl text-red-500"></i>
                                </div>
                                <p className="text-3xl font-bold text-gray-800">$3,800</p>
                                <span className="text-red-500 text-sm">-1.8% from last month</span>
                            </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="bg-white rounded-xl shadow-sm">
                            <div className="p-6 border-b">
                                <h3 className="text-xl font-semibold text-gray-800">Recent Transactions</h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <i className="ph-shopping-cart text-purple-600"></i>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-gray-800 font-medium">Grocery Shopping</p>
                                                <p className="text-gray-500 text-sm">Today, 2:30 PM</p>
                                            </div>
                                        </div>
                                        <span className="text-red-500 font-medium">-$120.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <i className="ph-money text-green-600"></i>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-gray-800 font-medium">Salary Deposit</p>
                                                <p className="text-gray-500 text-sm">Yesterday, 9:00 AM</p>
                                            </div>
                                        </div>
                                        <span className="text-green-500 font-medium">+$4,500.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default App

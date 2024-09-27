import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './app/Landing';
import HomeLayout from './layout/HomeLayout';
import Customer from './views/customer/Customer';
import ConfirmPrescription from './views/customer/ConfirmPrescription';
import { Auth as AdminAuth } from './views/admin/Auth';
import { Dashboard as ChineseDashboard } from './views/admin/chinese/Admin';
import OrderProcessing from './views/admin/OrderProcessing';
import ManualReview from './views/admin/ManualReview';
import AdminLayout from './layout/AdminLayout';
import ChineseStaff from './views/admin/chinese/Staff';
import TaskList from './views/admin/TaskList';
import InventoryManagement from './views/admin/InventoryManagement';
import USAdminLayout from './layout/USAdmin/Layout';
import Analytics from './views/admin/usa/admin/Analytics';
import Admins from './views/admin/usa/admin/Admins';
import Inventory from './views/admin/usa/admin/Inventory';
import Questionnaires from './views/admin/usa/admin/Questionnaire';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          # Route for Admin pages
          <Route path="/admins" element={<AdminLayout />}>
            <Route index element={<AdminAuth />} />
            <Route path="chinese">
              <Route path="admin" element={<ChineseDashboard />}>
                <Route index element={<div className="p-6 bg-white rounded-lg shadow-lg">
                  Welcome to the Chinese Admin Dashboard. Here you can manage orders, review prescriptions, and more.
                </div>} />
                <Route path="order-processing" element={<OrderProcessing />} />
                <Route path="manual-review" element={<ManualReview />} />
              </Route>
              <Route path="staff" element={<ChineseStaff />}>
                <Route index element={<div className="p-6 bg-white rounded-lg shadow-lg">
                  Welcome to the Chinese Staff Dashboard. Here you can manage orders, review prescriptions, and more.
                </div>} />
                <Route path="task-list" element={<TaskList />} />
                <Route path="inventory-management" element={<InventoryManagement />} />
              </Route>

            </Route>
            <Route path="us">
              <Route path="admin" element={<USAdminLayout />}>
                <Route index element={<Analytics />} />
                <Route path="admin-list" element={<Admins />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="questionnaire-management" element={<Questionnaires />} />
              </Route>
            </Route>
          </Route>
          # Route for default pages of Website
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path='get-started' element={<Customer />} />
            <Route path='confirm-prescription' element={<ConfirmPrescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

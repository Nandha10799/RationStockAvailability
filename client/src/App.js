import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CommonLogin } from './Components/CommonLoginPage/Common_Login';
import { SuperAdminDashboard } from './Components/SuperAdminModule/SuperAdminDashboardPage/SuperAdmin_DashBoard';
import { Settingrole } from './Components/SuperAdminModule/SettingModule/Setting_role_page/SettingRole';
import { Settingdistrict } from './Components/SuperAdminModule/SettingModule/Setting_district_page/SettingDistrict';
import { Setting_panchayat } from './Components/SuperAdminModule/SettingModule/Setting_panchayat_page/SettingPanchayat';
import { SuperAdminManubar } from './Components/SuperAdminModule/SuperAdminMenuBar/SuperAdmin_Manubar';
import { SettingUOM } from './Components/SuperAdminModule/SettingModule/Setting_UOM_page/SettingUom';
import { SuperAdmin_StaffCreation } from './Components/SuperAdminModule/SuperAdminStaffCreationPage/SuperAdminStaffCreation';
import { ItemCreation } from './Components/SuperAdminModule/ItemDetailsPage/ItemCreationPage/Item_Creation';
import { ItemStockUpdation } from './Components/SuperAdminModule/ItemDetailsPage/ItemStockUpdationPage/ItemStock_Updation';
import { ItemDetailStockIssue } from './Components/SuperAdminModule/ItemDetailsPage/ItemDetailsStockIssuePage/ItemDetails_StockIssue';
import { AdminManuBar } from './Components/AdminModule/AdminMenuBarPage/Admin_Manubar';
import { AdminDashboard } from './Components/AdminModule/AdminDashBoardPage/Admin_Dashboard';


function App() {
  return (
    <div>
      {/* <CommonLogin/> */}
      {/* <SuperAdminManubar/> */}
      {/* <SuperAdminDashboard/> */}
      {/* <Settingrole/> */}
      {/* <Settingdistrict/> */}
      {/* <Setting_panchayat/> */}
      {/* <SettingUOM/> */}
      {/* <SuperAdmin_StaffCreation/> */}
      {/* <ItemCreation/> */}
      {/* <ItemStockUpdation/> */}
      {/* <ItemDetailStockIssue/> */}
      {/* <AdminManuBar/> */}
      {/* <AdminDashboard/> */}
      <Router>
        <Routes>
          <Route path='/' element={<CommonLogin/>}></Route>
          <Route path='/SuperAdminDashBoard' element={<SuperAdminDashboard/>}></Route>
          <Route path='/SettingRole' element={<Settingrole/>}></Route>
          <Route path='/SettingDistrict' element={<Settingdistrict/>}></Route>
          <Route path='/SettingPanchayat' element={<Setting_panchayat/>}></Route>
          <Route path='/SettingUOM' element={<SettingUOM/>}></Route>
          <Route path='/SuperAdminStaffCreation' element={<SuperAdmin_StaffCreation/>}></Route>
          <Route path='/ItemCreation' element={<ItemCreation/>}></Route>
          <Route path='ItemStockUpdation' element={<ItemStockUpdation/>}></Route>
          <Route path='/ItemDetailStockIssue' element={<ItemDetailStockIssue/>}></Route>
          <Route path='/AdminManuBar' element={<AdminManuBar/>}></Route>
          <Route path='/AdminDashBoard' element={<AdminDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

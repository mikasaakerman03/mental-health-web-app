import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '../shared/helpers/i18n';
import { AdminRoutes } from './AdminRoutes';
import { GuestRoutes } from './GuestRoutes';
import { UserRoutes } from './UserRoutes';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/guest/*" element={<GuestRoutes />} />
          <Route path="/admin" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </I18nextProvider>
  )
}

export default App;

import React from 'react';
import Settings from './Settings';

function SettingScreen() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Customize your application preferences</p>
        </div>

        {/* Settings Panel */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default SettingScreen;
 
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <iframe
        src="https://kv-daily-expenditure-earning-203582405140.us-west1.run.app"
        title="KV Daily Expenditure App"
        className="w-full h-full border-none block"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default App;
import React from "react";


const MenuScreen = () => {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '48%', marginBottom: '20px', position: 'relative' }}>
            <img style={{ width: '100%', height: 'auto' }} src="../assets/anhmenu.jpg" alt="Food 1" />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Food 1</span>
          </div>
          <div style={{ width: '48%', marginBottom: '20px', position: 'relative' }}>
            <img style={{ width: '100%', height: 'auto' }} src="../assets/anhmenu.jpg" alt="Food 2" />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Food 2</span>
          </div>
          <div style={{ width: '48%', marginBottom: '20px', position: 'relative' }}>
            <img style={{ width: '100%', height: 'auto' }} src="../assets/favicon.png" alt="Food 3" />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Food 3</span>
          </div>
          <div style={{ width: '48%', marginBottom: '20px', position: 'relative' }}>
            <img style={{ width: '100%', height: 'auto' }} src="../assets/logo.jpg" alt="Food 4" />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>Food 4</span>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default MenuScreen;
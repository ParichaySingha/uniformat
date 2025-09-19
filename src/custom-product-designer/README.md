### Step 1: Set Up Your React Project

First, you need to create a new React application. You can use Create React App for this purpose.

```bash
npx create-react-app custom-product-designer
cd custom-product-designer
```

### Step 2: Install Fabric.js

Next, install Fabric.js, which will be used for the canvas and design functionalities.

```bash
npm install fabric
```

### Step 3: Create the Project Structure

You can organize your project as follows:

```
src/
├── components/
│   ├── Canvas.js
│   ├── Sidebar.js
│   ├── ProductConfigurator.js
│   └── Cart.js
├── App.js
└── index.js
```

### Step 4: Implement the Canvas Component

Create a `Canvas.js` file to handle the Fabric.js canvas.

```jsx
// src/components/Canvas.js
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = ({ onObjectAdded }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: '#fff',
    });

    canvas.on('object:added', (event) => {
      onObjectAdded(event.target);
    });

    return () => {
      canvas.dispose();
    };
  }, [onObjectAdded]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Canvas;
```

### Step 5: Implement the Sidebar Component

Create a `Sidebar.js` file for adding text and images.

```jsx
// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ onAddText, onAddImage }) => {
  return (
    <div className="sidebar">
      <h2>Design Tools</h2>
      <button onClick={() => onAddText(prompt('Enter text:'))}>Add Text</button>
      <button onClick={() => {
        const url = prompt('Enter image URL:');
        if (url) onAddImage(url);
      }}>Add Image</button>
    </div>
  );
};

export default Sidebar;
```

### Step 6: Implement the Product Configurator Component

Create a `ProductConfigurator.js` file for product options.

```jsx
// src/components/ProductConfigurator.js
import React from 'react';

const ProductConfigurator = ({ onConfigure }) => {
  return (
    <div className="configurator">
      <h2>Product Configurator</h2>
      <button onClick={() => onConfigure('Option 1')}>Option 1</button>
      <button onClick={() => onConfigure('Option 2')}>Option 2</button>
    </div>
  );
};

export default ProductConfigurator;
```

### Step 7: Implement the Cart Component

Create a `Cart.js` file to manage cart functionality.

```jsx
// src/components/Cart.js
import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
```

### Step 8: Combine Everything in App.js

Now, integrate all components in `App.js`.

```jsx
// src/App.js
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import ProductConfigurator from './components/ProductConfigurator';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddText = (text) => {
    if (text) {
      const canvas = new fabric.Canvas('canvas');
      const textObj = new fabric.Text(text, { left: 100, top: 100 });
      canvas.add(textObj);
    }
  };

  const handleAddImage = (url) => {
    const canvas = new fabric.Canvas('canvas');
    fabric.Image.fromURL(url, (img) => {
      img.set({ left: 100, top: 100 });
      canvas.add(img);
    });
  };

  const handleConfigure = (option) => {
    setCartItems((prevItems) => [...prevItems, option]);
  };

  return (
    <div className="App">
      <Sidebar onAddText={handleAddText} onAddImage={handleAddImage} />
      <Canvas />
      <ProductConfigurator onConfigure={handleConfigure} />
      <Cart items={cartItems} />
    </div>
  );
};

export default App;
```

### Step 9: Style Your Application

You can add some basic CSS to style your application. Create a `styles.css` file and import it in `index.js`.

```css
/* src/styles.css */
.App {
  display: flex;
  justify-content: space-between;
}

.sidebar, .configurator, .cart {
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
}

canvas {
  border: 1px solid #000;
}
```

### Step 10: Run Your Application

Finally, run your application to see the custom product designer tool in action.

```bash
npm start
```

### Conclusion

This is a basic setup for a custom product designer tool using React and Fabric.js. You can expand upon this by adding more features such as saving designs, customizing product options, and improving the UI/UX.
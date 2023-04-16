import React from 'react'

import { Button } from 'buttonmtu'
import 'buttonmtu/dist/index.css'

const App = () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App

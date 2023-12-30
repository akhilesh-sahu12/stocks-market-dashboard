import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './Dashboard.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardCustomizable = () => {
  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 4, h: 4 },
    { i: '2', x: 4, y: 0, w: 4, h: 4 },
  ]);

  const addWidget = () => {
    const newWidget = {
      i: `Stock-${layout.length + 1}`,
      x: 0,
      y: 0,
      w: 4,
      h: 4,
    };
    setLayout([...layout, newWidget]);
  };

  const removeWidget = (widgetId) => {
    const updatedLayout = layout.filter((widget) => widget.i !== widgetId);
    setLayout(updatedLayout);
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className='layout-dashboard'>
      <button onClick={addWidget}>Add Widget</button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        onLayoutChange={onLayoutChange}
        draggableHandle=".widget-header"
      >
        {layout.map((widget) => (
          <div key={widget.i}>
            <div className="widget-header">
              <span>Stock {widget.i}</span>
            </div>
            <div className="widget-content">Apple</div>
            <button onClick={() => removeWidget(widget.i)}>Remove</button>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DashboardCustomizable;




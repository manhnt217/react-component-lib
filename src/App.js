// import Treeview from 'react-treeview-component';
import TreeView, { TreeNode } from 'react-treeview';
import React from 'react';
import './App.css';

function App() {
  return (
    <TreeView nodeLabel="A" key="A" defaultCollapsed={false}>
      <TreeView nodeLabel="B" key="B" defaultCollapsed={true}>
        <TreeView nodeLabel="C" key="C" defaultCollapsed={false}>
          <div>Hello world</div>
        </TreeView>
      </TreeView>
    </TreeView>
  );
}

export default App;

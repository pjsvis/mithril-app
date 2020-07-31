import m from "mithril";

export const ComponentWithHooks = {
  oninit: function (vnode) {
    console.log("CWH initialized");
  },
  oncreate: function (vnode) {
    console.log("CWH DOM created");
  },
  onbeforeupdate: function (newVnode, oldVnode) {
    return true;
  },
  onupdate: function (vnode) {
    console.log("CWH DOM updated");
  },
  onbeforeremove: function (vnode) {
    console.log("CWH exit animation can start");
    return new Promise(function (resolve) {
      // call after animation completes
      resolve();
    });
  },
  onremove: function (vnode) {
    console.log("CWH removing DOM element");
  },
  view: function (vnode) {
    return "ComponentWithHooks";
  },
};

export const ComponentWithHooksEX = ({attrs}) => {
  const oninit = (vnode) => {
    console.log("CWH initialized");
  };

  const oncreate = (vnode) => {
    console.log("CWH DOM created");
  };

  const onbeforeupdate = (newVnode, oldVnode) => {
    return true;
  };

  const onupdate = (vnode) => {
    console.log("CWH DOM updated");
  };

  const onbeforeremove = (vnode) => {
    console.log("CWH exit animation can start");
    return new Promise(function (resolve) {
      // call after animation completes
      resolve();
    });
  };

  const onremove = (vnode) => {
    console.log("CWH removing DOM element");
  };

  // TODO: Put vnode in params along with attrs
  const view = (vnode) => {
    return "ComponentWithHooks";
  };

  return view;
};

class Vue {
  constructor (el, data) {
    this._el = document.querySelector(el);
    this._data = data;
    this.domPool = {}

    this.init()
  };

  init () {
    this.initData()
    this.initDom()
  };

  initDom () {
    this.bindDom(this._el)
    this.bindInput(this._el)
  }

  initData () {
    const _this = this;
    this.data = {};
    for (let key in _this._data) {
      Object.defineProperty(this.data, key, {
        get () {
          console.log('get:' + key)
          return _this._data[key]
        },
        set (newValue) {
          console.log('set:' + key, newValue)
          _this._data[key] = newValue
          _this.domPool[key].innerHTML = newValue
        }
      })
    }
    // console.log(this.data.name = 4)
  };

  bindInput (el) {
    const allInputs = el.querySelectorAll('input');
    allInputs.forEach(input => {
      const vModel = input.getAttribute('v-model')
      if (vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, vModel, input))
      }
    })
  };

  handleInput (key, input) {
    this.data[key] = input.value
  };

  bindDom (el) {
    const childNodes = el.childNodes
    childNodes.forEach(node => {
      if (node.nodeType === 3) {
        const _value = node.nodeValue
        if (_value.trim().length) {
          let _isValid = /\{\{(.+?)\}\}/.test(_value);
          if (_isValid) {
            let _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
            this.domPool[_key] = node.parentNode
            node.parentNode.innerText = this.data[_key]
          }
        }
      }
      node.childNodes && this.bindDom(node)
    })
  }
}
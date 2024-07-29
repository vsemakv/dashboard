export const state = () => ({
    isShowMenu: false,
  })
  
  export const mutations = {
    open(state) {
        state.isShowMenu = true
        document.body.style.cssText=`
            overflow:hidden;
            top:-${this.scrollPosition}px;
            left:0'
            height:100%;
            width:100%;
        `;
        document.documentElement.style.scrollBehavior="unset";
    },
    close(state) {
        state.isShowMenu = false
        document.body.style.cssText=``;
        window.scroll({top: this.scrollPosition})
        document.documentElement.style.scrollBehavior="";
    }
  }
  
  export const getters = {
    getMenu: (state) => { 
      return state.isShowMenu;
    },
  }
  
  export const actions = {
    toggle({ commit, state }) {
      if (state.isShowMenu === true) {
        commit('close')
      } else {
        commit('open')
      }
    },
    close({ commit }) {
        commit('close')
    }
  }
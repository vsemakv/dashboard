export const state = () => ({
    isShowBurger: false,
  })
  
  export const mutations = {
    open(state) {
        state.isShowBurger = true
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
        state.isShowBurger = false
        document.body.style.cssText=``;
        window.scroll({top: this.scrollPosition})
        document.documentElement.style.scrollBehavior="";
    }
  }
  
  export const getters = {
    getBurger: (state) => { 
      return state.isShowBurger;
    },
  }
  
  export const actions = {
    toggle({ commit, state }) {
      if (state.isShowBurger === true) {
        commit('close')
      } else {
        commit('open')
      }
    },
    close({ commit }) {
        commit('close')
    }
  }
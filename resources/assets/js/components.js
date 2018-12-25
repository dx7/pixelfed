window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'
import InfiniteLoading from 'vue-infinite-loading';
import Loading from 'vue-loading-overlay';
import VueTimeago from 'vue-timeago';

Vue.use(BootstrapVue);
Vue.use(InfiniteLoading);
Vue.use(Loading);
Vue.use(VueTimeago);

pixelfed.readmore = () => {
  $('.read-more').each(function(k,v) {
      let el = $(this);
      let attr = el.attr('data-readmore');
      if(typeof attr !== typeof undefined && attr !== false) {
        return;
      }
      el.readmore({
        collapsedHeight: 44,
        heightMargin: 20,
        moreLink: '<a href="#" class="font-weight-bold small">Read more</a>',
        lessLink: '<a href="#" class="font-weight-bold small">Hide</a>',
      });
  });
};

window.InfiniteScroll = require('infinite-scroll');
window.filesize = require('filesize');
window.Plyr = require('plyr');
import swal from 'sweetalert';

require('./components/localstorage');
require('./components/likebutton');
require('./components/commentform');
require('./components/searchform');
require('./components/bookmarkform');
require('./components/statusform');
//require('./components/embed');
//require('./components/notifications');

// import Echo from "laravel-echo"

// window.io = require('socket.io-client');

// window.pixelfed.bootEcho = function() {
//     window.Echo = new Echo({
//         broadcaster: 'socket.io',
//         host: window.location.hostname + ':2096',
//         auth: {
//             headers: {
//                 Authorization: 'Bearer ' + token.content,
//             },
//         },
//     });
// }

// Initalize Notification Helper
window.pixelfed.n = {};

Vue.component(
    'photo-presenter',
    require('./components/presenter/PhotoPresenter.vue')
);

Vue.component(
    'video-presenter',
    require('./components/presenter/VideoPresenter.vue')
);

Vue.component(
    'photo-album-presenter',
    require('./components/presenter/PhotoAlbumPresenter.vue')
);

Vue.component(
    'video-album-presenter',
    require('./components/presenter/VideoAlbumPresenter.vue')
);

Vue.component(
    'mixed-album-presenter',
    require('./components/presenter/MixedAlbumPresenter.vue')
);

// Vue.component(
//     'micro',
//     require('./components/Micro.vue')
// );

Vue.component(
    'follow-suggestions',
    require('./components/FollowSuggestions.vue')
);

Vue.component(
    'discover-component',
    require('./components/DiscoverComponent.vue')
);

// Vue.component(
//     'circle-panel',
//     require('./components/CirclePanel.vue')
// );

Vue.component(
    'post-component',
    require('./components/PostComponent.vue')
);

Vue.component(
    'post-comments',
    require('./components/PostComments.vue')
);

Vue.component(
    'timeline',
    require('./components/Timeline.vue')
);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

window.pixelfed.copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = 
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

$(document).ready(function() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});

const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';
const warningDescCSS = 'font-size: 18px;';
console.log('%cStop!', warningTitleCSS);
console.log("%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Pixelfed feature or \"hack\" someone's account, it is a scam and will give them access to your Pixelfed account.", warningDescCSS);
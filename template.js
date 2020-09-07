import Vue from 'vue';

<% if (options.components.length === 0) { %>
import ElementUI from 'element-ui';
Vue.use(ElementUI);
<% } else { %>
<% options.components.forEach((c) => { %>
import <%= c.className %> from 'element-ui/lib/<%= c.fileName %>';
<% if (['Loading', 'Message', 'MessageBox', 'Notification'].indexOf(c.className) === -1) { %>
Vue.use(<%= c.className %>);
<% } else if (c.className === 'Loading') { %>
Vue.prototype.$loading = Loading.service;
<% } else if (c.className === 'MessageBox') { %>
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
<% } else if (c.className === 'Notification') { %>
Vue.prototype.$notify = Notification;
<% } else if (c.className === 'Message') { %>
Vue.prototype.$message = Message;
<% } %>
<% }); %>
<% } %>

import ElementLocale from 'element-ui/lib/locale';

<% if (!options.i18n) { %>
import lang from 'element-ui/lib/locale/lang/<%= options.locale %>';
<% } %>

<% if (options.i18n) { %>
export default function({ app }) {
ElementLocale.i18n((key, value) => app.i18n.t(key, value));
}
<% } else { %>
ElementLocale.use(lang);
<% } %>

import './index.scss'
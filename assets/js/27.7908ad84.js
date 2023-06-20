(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{352:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vagrant简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vagrant简介"}},[s._v("#")]),s._v(" Vagrant简介")]),s._v(" "),a("blockquote",[a("p",[s._v("Vagrant是一种在单一工作流中构建和管理虚拟机环境的工具。凭借易于使用的工作流和对自动化的关注。 Vagrant降低了开发环境的设置时间，增加了产品平价，并使“在我的机器上工作”的借口成为过去的遗留问题。")])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows 系统")]),s._v("\nhttps://releases.hashicorp.com/vagrant/2.3.2/vagrant_2.3.2_windows_amd64.msi\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu 系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O- https://apt.releases.hashicorp.com/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dearmor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /usr/share/keyrings/hashicorp-archive-keyring.gpg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/hashicorp.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vagrant "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos 系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vagrant\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
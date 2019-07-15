(function () {

    CKEDITOR.plugins.add('btbutton', {
            lang: 'en,ru,pt-br,uk',
            requires: 'widget,dialog',
            icons: 'btbutton',
            init: function (editor) {
                // Allow any attributes.
                editor.config.extraAllowedContent = '*(*);*{*}';
                var lang = editor.lang.btbutton;

                CKEDITOR.dialog.add('btbutton', this.path + 'dialogs/btbutton.js');

                // Add widget
                editor.ui.addButton('btbutton', {
                    label: lang.buttonTitle,
                    command: 'btbutton',
                    icon: this.path + 'icons/btbutton.png'
                });

                editor.widgets.add('btbutton', {
                    dialog: 'btbutton',

                    init: function () {
                      var $el = jQuery(this.element.$);

                      if ($el.hasClass("btn-primary")) {
                        this.data.btntype = "btn-primary";
                      } else if ($el.hasClass("btn-secondary")) {
                        this.data.btntype = "btn-secondary";
                      } else if ($el.hasClass("btn-success")) {
                        this.data.btntype = "btn-success";
                      } else if ($el.hasClass("btn-danger")) {
                        this.data.btntype = "btn-danger";
                      } else if ($el.hasClass("btn-warning")) {
                        this.data.btntype = "btn-warning";
                      } else if ($el.hasClass("btn-info")) {
                        this.data.btntype = "btn-info";
                      } else if ($el.hasClass("btn-light")) {
                        this.data.btntype = "btn-light";
                      } else if ($el.hasClass("btn-dark")) {
                        this.data.btntype = "btn-dark";
                      } else if ($el.hasClass("btn-link")) {
                        this.data.btntype = "btn-link";
                      } else if ($el.hasClass("btn-outline-primary")) {
                        this.data.btntype = "btn-outline-primary";
                      } else if ($el.hasClass("btn-outline-secondary")) {
                        this.data.btntype = "btn-outline-secondary";
                      } else if ($el.hasClass("btn-outline-success")) {
                        this.data.btntype = "btn-outline-success";
                      } else if ($el.hasClass("btn-outline-danger")) {
                        this.data.btntype = "btn-outline-danger";
                      } else if ($el.hasClass("btn-outline-warning")) {
                        this.data.btntype = "btn-outline-warning";
                      } else if ($el.hasClass("btn-outline-info")) {
                        this.data.btntype = "btn-outline-info";
                      } else if ($el.hasClass("btn-outline-light")) {
                        this.data.btntype = "btn-outline-light";
                      } else if ($el.hasClass("btn-outline-dark")) {
                        this.data.btntype = "btn-outline-dark";
                      }

                      if ($el.hasClass("btn-sm")) {
                        this.data.btnsize = "btn-sm";
                      } else if ($el.hasClass("btn-lg")) {
                        this.data.btnsize = "btn-lg";
                      }

                      this.data.href = $el.attr('href');

                      this.data.target = $el.attr('target');

                      this.data.text = jQuery('.text', $el).text();

                      var bs_icon_left = jQuery('.bs-icon-left', $el);
                      var bs_icon_right = jQuery('.bs-icon-right', $el);
                      var fa_icon_left = jQuery('.fa-icon-left', $el);
                      var fa_icon_right = jQuery('.fa-icon-right', $el);

                      if (bs_icon_left.length > 0) {
                        bs_icon_left.removeClass('bs-icon-left').removeClass('glyphicon');
                        this.data.bsiconleft = bs_icon_left.attr('class');
                        bs_icon_left.addClass('bs-icon-left').addClass('glyphicon');
                      }

                      if (bs_icon_right.length > 0) {
                        bs_icon_right.removeClass('bs-icon-right').removeClass('glyphicon');
                        this.data.bsiconright = bs_icon_right.attr('class');
                        bs_icon_right.addClass('bs-icon-right').addClass('glyphicon');
                      }

                      if (fa_icon_left.length > 0) {
                        fa_icon_left.removeClass('fa-icon-left').removeClass('fa');
                        this.data.faiconleft = fa_icon_left.attr('class');
                        fa_icon_left.addClass('fa-icon-left').addClass('fa');
                      }

                      if (fa_icon_right.length > 0) {
                        fa_icon_right.removeClass('fa-icon-right').removeClass('fa');
                        this.data.faiconright = fa_icon_right.attr('class');
                        fa_icon_right.addClass('fa-icon-right').addClass('fa');
                      }
                    },

                    template: '<a class="btn">' + '<span class="text"></span>' + '</a>',

                    data: function () {
                        var $el = jQuery(this.element.$);

                        if (this.data.btntype) {
                            $el.removeClass('btn-primary btn-secondary btn-success btn-danger btn-warning btn-info btn-light btn-dark btn-link btn-outline-primary btn-outline-secondary btn-outline-success btn-outline-danger btn-outline-warning btn-outline-info btn-outline-light btn-outline-dark').addClass(this.data.btntype);
                        }

                        $el.removeClass('btn-sm btn-lg');
			if (this.data.btnsize) {
                            $el.addClass(this.data.btnsize);
                        }

                        if (this.data.href) {
                          $el.attr('href', this.data.href);
                          this.element.$.removeAttribute('data-cke-saved-href');
                        }

                        if (this.data.target && this.data.target != '') {
                            $el.attr('target', this.data.target);
                        }

                        if (this.data.text) {
                            jQuery('.text', $el).text(this.data.text);
                        }

                        if (this.data.hasOwnProperty('bsiconleft')) {
                            jQuery('.bs-icon-left', $el).remove();
                            if (this.data.bsiconleft) {
                                $el.prepend('<span style="word-spacing: -1em;" class="bs-icon-left glyphicon ' + this.data.bsiconleft + '">&nbsp;</span>\n');
                            }
                        }

                        if (this.data.hasOwnProperty('bsiconright')) {
                            jQuery('.bs-icon-right', $el).remove();
                            if (this.data.bsiconright) {
                                $el.append('<span style="word-spacing: -1em;" class="bs-icon-right glyphicon ' + this.data.bsiconright + '">&nbsp;</span>\n');
                            }
                        }

                        if (this.data.hasOwnProperty('faiconleft')) {
                            jQuery('.fa-icon-left', $el).remove();
                            if (this.data.faiconleft) {
                                $el.prepend('<i style="word-spacing: -1em;" class="fa fa-icon-left ' + this.data.faiconleft + '">&nbsp;</i>\n');
                            }
                        }

                        if (this.data.hasOwnProperty('faiconright')) {
                            jQuery('.fa-icon-right', $el).remove();
                            if (this.data.faiconright) {
                                $el.append('<i style="word-spacing: -1em;" class="fa fa-icon-right ' + this.data.faiconright + '">&nbsp;</i>\n');
                            }
                        }
                    },

                    requiredContent: 'a(btn)',

                    upcast: function (element) {
                        return element.name == 'a' && element.hasClass('btn');
                    }
                });
            }
        }
    );

})();

! function(a, e) {
	a(document).ready(function() {
		a("a[data-toggle=\"chat\"]").each(function(o, t) {
			a(t).on("click", function(o) {
				o.preventDefault(), public_vars.$body.toggleClass("chat-open"), a.isFunction(a.fn.perfectScrollbar) && setTimeout(function() {
					public_vars.$chat.find(".chat_inner").perfectScrollbar("update"), a(e).trigger("xenon.resize")
				}, 1)
			})
		}), a("a[data-toggle=\"settings-pane\"]").each(function(o, n) {
			a(n).on("click", function(o) {
				o.preventDefault();
				var r = attrDefault(a(n), "animate", !1) && !isxs(),
					t = {
						top: a(document).scrollTop(),
						toTop: 0
					};
				public_vars.$body.hasClass("settings-pane-open") && (t.toTop = t.top), TweenMax.to(t, r ? .1 : 0, {
					top: t.toTop,
					roundProps: ["top"],
					ease: 10 > t.toTop ? null : Sine.easeOut,
					onUpdate: function() {
						a(e).scrollTop(t.top)
					},
					onComplete: function() {
						if (!r) public_vars.$body.toggleClass("settings-pane-open"), public_vars.$settingsPaneIn.removeClass("visible"), public_vars.$settingsPaneIn.removeClass("with-animation");
						else if (public_vars.$settingsPaneIn.addClass("with-animation"), public_vars.$settingsPane.is(":visible")) public_vars.$settingsPaneIn.addClass("closing"), TweenMax.to(public_vars.$settingsPane, .25, {
							css: {
								height: 0
							},
							delay: .15,
							ease: Power1.easeInOut,
							onComplete: function() {
								public_vars.$body.removeClass("settings-pane-open"), public_vars.$settingsPane.css({
									height: ""
								}), public_vars.$settingsPaneIn.removeClass("closing visible")
							}
						});
						else {
							public_vars.$body.addClass("settings-pane-open");
							var e = public_vars.$settingsPane.outerHeight(!0);
							public_vars.$settingsPane.css({
								height: 0
							}), TweenMax.to(public_vars.$settingsPane, .25, {
								css: {
									height: e
								},
								ease: Circ.easeInOut,
								onComplete: function() {
									public_vars.$settingsPane.css({
										height: ""
									})
								}
							}), public_vars.$settingsPaneIn.addClass("visible")
						}
					}
				})
			})
		}), a("a[data-toggle=\"sidebar\"]").each(function(o, t) {
			a(t).on("click", function(o) {
				o.preventDefault(), public_vars.$sidebarMenu.hasClass("collapsed") ? (public_vars.$sidebarMenu.removeClass("collapsed"), ps_init()) : (public_vars.$sidebarMenu.addClass("collapsed"), ps_destroy()), a(e).trigger("xenon.resize")
			})
		}), a("a[data-toggle=\"mobile-menu\"]").on("click", function(e) {
			e.preventDefault(), public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass("mobile-is-visible"), ps_destroy()
		}), a("a[data-toggle=\"mobile-menu-horizontal\"]").on("click", function(e) {
			e.preventDefault(), public_vars.$horizontalMenu.toggleClass("mobile-is-visible")
		}), a("a[data-toggle=\"mobile-menu-both\"]").on("click", function(e) {
			e.preventDefault(), public_vars.$mainMenu.toggleClass("mobile-is-visible both-menus-visible"), public_vars.$horizontalMenu.toggleClass("mobile-is-visible both-menus-visible")
		}), a("a[data-toggle=\"user-info-menu\"]").on("click", function(e) {
			e.preventDefault(), public_vars.$userInfoMenu.toggleClass("mobile-is-visible")
		}), a("a[data-toggle=\"user-info-menu-horizontal\"]").on("click", function(e) {
			e.preventDefault(), public_vars.$userInfoMenuHor.find(".nav.nav-userinfo").toggleClass("mobile-is-visible")
		}), a("body").on("click", ".panel a[data-toggle=\"remove\"]", function(o) {
			o.preventDefault();
			var t = a(this).closest(".panel"),
				e = t.parent();
			t.remove(), 0 == e.children().length && e.remove()
		}), a("body").on("click", ".panel a[data-toggle=\"reload\"]", function(o) {
			o.preventDefault();
			var t = a(this).closest(".panel");
			t.append("<div class=\"panel-disabled\"><div class=\"loader-1\"></div></div>");
			var e = t.find(".panel-disabled");
			setTimeout(function() {
				e.fadeOut("fast", function() {
					e.remove()
				})
			}, 500 + 300 * (5 * Math.random()))
		}), a("body").on("click", ".panel a[data-toggle=\"panel\"]", function(e) {
			e.preventDefault(), a(this).closest(".panel").toggleClass("collapsed")
		}), a("[data-loading-text]").each(function(o, t) {
			var e = a(t);
			e.on("click", function() {
				e.button("loading"), setTimeout(function() {
					e.button("reset")
				}, 1800)
			})
		}), a("[data-toggle=\"popover\"]").each(function(o, t) {
			var e = a(t),
				i = attrDefault(e, "placement", "right"),
				s = attrDefault(e, "trigger", "click"),
				n = e.get(0).className.match(/(popover-[a-z0-9]+)/i);
			e.popover({
				placement: i,
				trigger: s
			}), n && (e.removeClass(n[1]), e.on("show.bs.popover", function() {
				setTimeout(function() {
					e.next().addClass(n[1])
				}, 0)
			}))
		}), a("[data-toggle=\"tooltip\"]").each(function(o, t) {
			var e = a(t),
				i = attrDefault(e, "placement", "top"),
				s = attrDefault(e, "trigger", "hover"),
				n = e.get(0).className.match(/(tooltip-[a-z0-9]+)/i);
			e.tooltip({
				placement: i,
				trigger: s
			}), n && (e.removeClass(n[1]), e.on("show.bs.tooltip", function() {
				setTimeout(function() {
					e.next().addClass(n[1])
				}, 0)
			}))
		})
	})
}(jQuery, window);
var public_vars = public_vars || {};
! function(y, a) {
	y(document).ready(function() {
		if (public_vars.$body = y("body"), public_vars.$pageContainer = public_vars.$body.find(".page-container"), public_vars.$chat = public_vars.$pageContainer.find("#chat"), public_vars.$sidebarMenu = public_vars.$pageContainer.find(".sidebar-menu"), public_vars.$sidebarProfile = public_vars.$sidebarMenu.find(".sidebar-user-info"), public_vars.$mainMenu = public_vars.$sidebarMenu.find(".main-menu"), public_vars.$horizontalNavbar = public_vars.$body.find(".navbar.horizontal-menu"), public_vars.$horizontalMenu = public_vars.$horizontalNavbar.find(".navbar-nav"), public_vars.$mainContent = public_vars.$pageContainer.find(".main-content"), public_vars.$mainFooter = public_vars.$body.find("footer.main-footer"), public_vars.$userInfoMenuHor = public_vars.$body.find(".navbar.horizontal-menu"), public_vars.$userInfoMenu = public_vars.$body.find("nav.navbar.user-info-navbar"), public_vars.$settingsPane = public_vars.$body.find(".settings-pane"), public_vars.$settingsPaneIn = public_vars.$settingsPane.find(".settings-pane-inner"), public_vars.wheelPropagation = !0, public_vars.$pageLoadingOverlay = public_vars.$body.find(".page-loading-overlay"), public_vars.defaultColorsPalette = ["#68b828", "#7c38bc", "#0e62c7", "#fcd036", "#4fcdfc", "#00b19d", "#ff6264", "#f7aa47"], public_vars.$pageLoadingOverlay.length && y(a).load(function() {
			public_vars.$pageLoadingOverlay.addClass("loaded")
		}), a.onerror = function() {
			public_vars.$pageLoadingOverlay.addClass("loaded")
		}, setup_sidebar_menu(), setup_horizontal_menu(), public_vars.$mainFooter.hasClass("sticky") && (stickFooterToBottom(), y(a).on("xenon.resized", stickFooterToBottom)), y.isFunction(y.fn.perfectScrollbar)) {
			public_vars.$sidebarMenu.hasClass("fixed") && ps_init(), y(".ps-scrollbar").each(function(a, t) {
				var e = y(t);
				e.hasClass("ps-scroll-down") && e.scrollTop(e.prop("scrollHeight")), e.perfectScrollbar({
					wheelPropagation: !1
				})
			});
			var o = public_vars.$pageContainer.find("#chat .chat-inner");
			o.parent().hasClass("fixed") && o.css({
				maxHeight: y(a).height()
			}).perfectScrollbar(), y(".dropdown:has(.ps-scrollbar)").each(function() {
				var e = y(this).find(".ps-scrollbar");
				y(this).on("click", "[data-toggle=\"dropdown\"]", function(a) {
					a.preventDefault(), setTimeout(function() {
						e.perfectScrollbar("update")
					}, 1)
				})
			}), y("div.scrollable").each(function(a, t) {
				var e = y(t),
					o = parseInt(attrDefault(e, "max-height", 200), 10);
				o = 0 > o ? 200 : o, e.css({
					maxHeight: o
				}).perfectScrollbar({
					wheelPropagation: !0
				})
			})
		}
		if (y(".user-info-menu .search-form, .nav.navbar-right .search-form").each(function(a, t) {
			var e = y(t).find(".form-control");
			y(t).on("click", ".btn", function() {
				if (0 == e.val().trim().length) return jQuery(t).addClass("focused"), setTimeout(function() {
					e.focus()
				}, 100), !1
			}), e.on("blur", function() {
				jQuery(t).removeClass("focused")
			})
		}), public_vars.$mainFooter.hasClass("fixed") && public_vars.$mainContent.css({
			paddingBottom: public_vars.$mainFooter.outerHeight(!0)
		}), y("body").on("click", "a[rel=\"go-top\"]", function(o) {
			o.preventDefault();
			var t = {
				pos: y(a).scrollTop()
			};
			TweenLite.to(t, .3, {
				pos: 0,
				ease: Power4.easeOut,
				onUpdate: function() {
					y(a).scrollTop(t.pos)
				}
			})
		}), public_vars.$userInfoMenu.length && public_vars.$userInfoMenu.find(".user-info-menu > li").css({
			minHeight: public_vars.$userInfoMenu.outerHeight() - 1
		}), y.isFunction(y.fn.autosize) && y(".autosize, .autogrow").autosize(), cbr_replace(), y(".breadcrumb.auto-hidden").each(function(a, t) {
			var e = y(t).find("li a"),
				o = (e.width(), 0);
			e.each(function(a, t) {
				var e = y(t);
				o = e.outerWidth(!0) + 5, e.addClass("collapsed").width(o), e.hover(function() {
					e.removeClass("collapsed")
				}, function() {
					e.addClass("collapsed")
				})
			})
		}), y(a).on("keydown", function(e) {
			27 == e.keyCode && public_vars.$body.hasClass("modal-open") && y(".modal-open .modal:visible").modal("hide")
		}), y(".input-group.input-group-minimal:has(.form-control)").each(function(a, t) {
			var e = y(t);
			e.find(".form-control").on("focus", function() {
				e.addClass("focused")
			}).on("blur", function() {
				e.removeClass("focused")
			})
		}), y(".input-group.spinner").each(function(d, t) {
			var e = y(t),
				i = e.find("[data-type=\"decrement\"]"),
				s = e.find("[data-type=\"increment\"]"),
				n = e.find(".form-control"),
				r = attrDefault(e, "step", 1),
				o = attrDefault(e, "min", 0),
				a = attrDefault(e, "max", 0),
				l = o < a;
			i.on("click", function(a) {
				a.preventDefault();
				var t = new Number(n.val()) - r;
				l && t <= o && (t = o), n.val(t)
			}), s.on("click", function(o) {
				o.preventDefault();
				var t = new Number(n.val()) + r;
				l && a <= t && (t = a), n.val(t)
			})
		}), y.isFunction(y.fn.select2) && (y(".select2").each(function(a, t) {
			var e = y(t),
				o = {
					allowClear: attrDefault(e, "allowClear", !1)
				};
			e.select2(o), e.addClass("visible")
		}), y.isFunction(y.fn.niceScroll) && y(".select2-results").niceScroll({
			cursorcolor: "#d4d4d4",
			cursorborder: "1px solid #ccc",
			railpadding: {
				right: 3
			}
		})), y.isFunction(y.fn.selectBoxIt) && y("select.selectboxit").each(function(a, t) {
			var e = y(t),
				o = {
					showFirstOption: attrDefault(e, "first-option", !0),
					native: attrDefault(e, "native", !1),
					defaultText: attrDefault(e, "text", "")
				};
			e.addClass("visible"), e.selectBoxIt(o)
		}), y.isFunction(y.fn.datepicker) && y(".datepicker").each(function(a, t) {
			var e = y(t),
				o = {
					format: attrDefault(e, "format", "mm/dd/yyyy"),
					startDate: attrDefault(e, "startDate", ""),
					endDate: attrDefault(e, "endDate", ""),
					daysOfWeekDisabled: attrDefault(e, "disabledDays", ""),
					startView: attrDefault(e, "startView", 0),
					rtl: rtl()
				}, i = e.next(),
				n = e.prev();
			e.datepicker(o), i.is(".input-group-addon") && i.has("a") && i.on("click", function(a) {
				a.preventDefault(), e.datepicker("show")
			}), n.is(".input-group-addon") && n.has("a") && n.on("click", function(a) {
				a.preventDefault(), e.datepicker("show")
			})
		}), y.isFunction(y.fn.daterangepicker) && y(".daterange").each(function(d, t) {
			var e = {
				Today: [moment(), moment()],
				Yesterday: [moment().subtract("days", 1), moment().subtract("days", 1)],
				"Last 7 Days": [moment().subtract("days", 6), moment()],
				"Last 30 Days": [moment().subtract("days", 29), moment()],
				"This Month": [moment().startOf("month"), moment().endOf("month")],
				"Last Month": [moment().subtract("month", 1).startOf("month"), moment().subtract("month", 1).endOf("month")]
			}, p = y(t),
				i = {
					format: attrDefault(p, "format", "MM/DD/YYYY"),
					timePicker: attrDefault(p, "timePicker", !1),
					timePickerIncrement: attrDefault(p, "timePickerIncrement", !1),
					separator: attrDefault(p, "separator", " - ")
				}, n = attrDefault(p, "minDate", ""),
				r = attrDefault(p, "maxDate", ""),
				o = attrDefault(p, "startDate", ""),
				a = attrDefault(p, "endDate", "");
			p.hasClass("add-ranges") && (i.ranges = e), n.length && (i.minDate = n), r.length && (i.maxDate = r), o.length && (i.startDate = o), a.length && (i.endDate = a), p.daterangepicker(i, function(a, t) {
				var e = p.data("daterangepicker");
				p.is("[data-callback]") && callback_test(a, t), p.hasClass("daterange-inline") && p.find("span").html(a.format(e.format) + e.separator + t.format(e.format))
			}), "object" == typeof i.ranges && p.data("daterangepicker").container.removeClass("show-calendar")
		}), y.isFunction(y.fn.timepicker) && y(".timepicker").each(function(a, t) {
			var e = y(t),
				o = {
					template: attrDefault(e, "template", !1),
					showSeconds: attrDefault(e, "showSeconds", !1),
					defaultTime: attrDefault(e, "defaultTime", "current"),
					showMeridian: attrDefault(e, "showMeridian", !0),
					minuteStep: attrDefault(e, "minuteStep", 15),
					secondStep: attrDefault(e, "secondStep", 15)
				}, i = e.next(),
				n = e.prev();
			e.timepicker(o), i.is(".input-group-addon") && i.has("a") && i.on("click", function(a) {
				a.preventDefault(), e.timepicker("showWidget")
			}), n.is(".input-group-addon") && n.has("a") && n.on("click", function(a) {
				a.preventDefault(), e.timepicker("showWidget")
			})
		}), y.isFunction(y.fn.colorpicker) && y(".colorpicker").each(function(a, t) {
			var e = y(t),
				o = e.next(),
				i = e.prev(),
				n = e.siblings(".input-group-addon").find(".color-preview");
			e.colorpicker({}), o.is(".input-group-addon") && o.has("a") && o.on("click", function(a) {
				a.preventDefault(), e.colorpicker("show")
			}), i.is(".input-group-addon") && i.has("a") && i.on("click", function(a) {
				a.preventDefault(), e.colorpicker("show")
			}), n.length && (e.on("changeColor", function(e) {
				n.css("background-color", e.color.toHex())
			}), e.val().length && n.css("background-color", e.val()))
		}), y.isFunction(y.fn.validate) && y("form.validate").each(function(a, t) {
			var e = y(t),
				d = {
					rules: {},
					messages: {},
					errorElement: "span",
					errorClass: "validate-has-error",
					highlight: function(e) {
						y(e).closest(".form-group").addClass("validate-has-error")
					},
					unhighlight: function(e) {
						y(e).closest(".form-group").removeClass("validate-has-error")
					},
					errorPlacement: function(a, t) {
						t.closest(".has-switch").length ? a.insertAfter(t.closest(".has-switch")) : t.parent(".checkbox, .radio").length || t.parent(".input-group").length ? a.insertAfter(t.parent()) : a.insertAfter(t)
					}
				};
			e.find("[data-validate]").each(function(p, t) {
				var e = y(t),
					i = e.attr("name"),
					s = attrDefault(e, "validate", "").toString().split(",");
				for (var n in s) {
					var r, c, m = s[n];
					void 0 === d.rules[i] && (d.rules[i] = {}, d.messages[i] = {}), -1 == y.inArray(m, ["required", "url", "email", "number", "date", "creditcard"]) ? (r = m.match(/(\w+)\[(.*?)\]/i)) && -1 != y.inArray(r[1], ["min", "max", "minlength", "maxlength", "equalTo"]) && (d.rules[i][r[1]] = r[2], (c = e.data("message-" + r[1])) && (d.messages[i][r[1]] = c)) : (d.rules[i][m] = !0, (c = e.data("message-" + m)) && (d.messages[i][m] = c))
				}
			}), e.validate(d)
		}), y.isFunction(y.fn.inputmask) && y("[data-mask]").each(function(l, t) {
			var e = y(t),
				i = e.data("mask").toString(),
				d = {
					numericInput: attrDefault(e, "numeric", !1),
					radixPoint: attrDefault(e, "radixPoint", ""),
					rightAlign: "right" == attrDefault(e, "numericAlign", "left")
				}, n = attrDefault(e, "placeholder", ""),
				r = attrDefault(e, "isRegex", "");
			switch (n.length && (d[n] = n), i.toLowerCase()) {
				case "phone":
					i = "(999) 999-9999";
					break;
				case "currency":
				case "rcurrency":
					var o = attrDefault(e, "sign", "$");
					i = "999,999,999.99", "rcurrency" == e.data("mask").toLowerCase() ? i += " " + o : i = o + " " + i, d.numericInput = !0, d.rightAlignNumerics = !1, d.radixPoint = ".";
					break;
				case "email":
					i = "Regex", d.regex = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}";
					break;
				case "fdecimal":
					i = "decimal", y.extend(d, {
						autoGroup: !0,
						groupSize: 3,
						radixPoint: attrDefault(e, "rad", "."),
						groupSeparator: attrDefault(e, "dec", ",")
					});
			}
			r && (d.regex = i, i = "Regex"), e.inputmask(i, d)
		}), y.isFunction(y.fn.bootstrapWizard) && y(".form-wizard").each(function(a, t) {
			function e() {
				return !i.hasClass("validate") || i.valid() || (i.data("validator").focusInvalid(), !1)
			}
			var i = y(t),
				l = i.find("> .tabs > li"),
				n = i.find(".progress-indicator"),
				r = i.find("> ul > li.active").index();
			0 < r && (n.css({
				width: 100 * (r / l.length) + "%"
			}), l.removeClass("completed").slice(0, r).addClass("completed")), i.bootstrapWizard({
				tabClass: "",
				onTabShow: function(a, t, e) {
					var o = 100 * (l.eq(e).position().left / l.parent().width());
					l.removeClass("completed").slice(0, e).addClass("completed"), n.css({
						width: o + "%"
					})
				},
				onNext: e,
				onTabClick: e
			}), i.data("bootstrapWizard").show(r), i.find(".pager a").on("click", function(e) {
				e.preventDefault()
			})
		}), y.isFunction(y.fn.slider) && y(".slider").each(function(b, t) {
			var e = y(t),
				T = y("<span class=\"ui-label\"></span>"),
				n = T.clone(),
				i = 0 == attrDefault(e, "vertical", 0) ? "horizontal" : "vertical",
				r = attrDefault(e, "prefix", ""),
				o = attrDefault(e, "postfix", ""),
				a = attrDefault(e, "fill", ""),
				l = y(a),
				s = attrDefault(e, "step", 1),
				c = attrDefault(e, "value", 5),
				u = attrDefault(e, "min", 0),
				p = attrDefault(e, "max", 100),
				d = attrDefault(e, "min-val", 10),
				f = attrDefault(e, "max-val", 90),
				m = e.is("[data-min-val]") || e.is("[data-max-val]"),
				_ = 0;
			if (m) {
				e.slider({
					range: !0,
					orientation: i,
					min: u,
					max: p,
					values: [d, f],
					step: s,
					slide: function(d, t) {
						var e = (r || "") + t.values[0] + (o || ""),
							i = (r || "") + t.values[1] + (o || "");
						T.html(e), n.html(i), a && l.val(e + "," + i), _++
					},
					change: function(d, t) {
						if (1 == _) {
							var e = (r || "") + t.values[0] + (o || ""),
								i = (r || "") + t.values[1] + (o || "");
							T.html(e), n.html(i), a && l.val(e + "," + i)
						}
						_ = 0
					}
				});
				var h = e.find(".ui-slider-handle");
				T.html((r || "") + d + (o || "")), h.first().append(T), n.html((r || "") + f + (o || "")), h.last().append(n)
			} else e.slider({
				range: !attrDefault(e, "basic", 0) && "min",
				orientation: i,
				min: u,
				max: p,
				value: c,
				step: s,
				slide: function(n, t) {
					var e = (r || "") + t.value + (o || "");
					T.html(e), a && l.val(e), _++
				},
				change: function(n, t) {
					if (1 == _) {
						var e = (r || "") + t.value + (o || "");
						T.html(e), a && l.val(e)
					}
					_ = 0
				}
			}), h = e.find(".ui-slider-handle"), T.html((r || "") + c + (o || "")), h.html(T)
		}), y.isFunction(y.fn.knob) && y(".knob").knob({
			change: function() {},
			release: function() {},
			cancel: function() {},
			draw: function() {
				if ("tron" == this.$.data("skin")) {
					var a, o = this.angle(this.cv),
						e = this.startAngle,
						r = this.startAngle,
						l = r + o;
					return this.g.lineWidth = this.lineWidth, this.o.cursor && (r = l - .3) && (l += .3), this.o.displayPrevious && (a = this.startAngle + this.angle(this.v), this.o.cursor && (e = a - .3) && (a += .3), this.g.beginPath(), this.g.strokeStyle = this.pColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, e, a, !1), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, r, l, !1), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
				}
			}
		}), y.isFunction(y.fn.wysihtml5) && y(".wysihtml5").each(function(a, t) {
			var e = y(t),
				o = attrDefault(e, "stylesheet-url", "");
			y(".wysihtml5").wysihtml5({
				size: "white",
				stylesheets: o.split(","),
				html: attrDefault(e, "html", !0),
				color: attrDefault(e, "colors", !0)
			})
		}), y.isFunction(y.fn.ckeditor) && y(".ckeditor").ckeditor({
			contentsLangDirection: rtl() ? "rtl" : "ltr"
		}), "undefined" != typeof Dropzone && (Dropzone.autoDiscover = !1, y(".dropzone[action]").each(function(a, t) {
			y(t).dropzone()
		})), y.isFunction(y.fn.tocify) && y("#toc").length) {
			y("#toc").tocify({
				context: ".tocify-content",
				selectors: "h2,h3,h4,h5"
			});
			var t = y(".tocify"),
				e = scrollMonitor.create(t.get(0));
			t.width(t.parent().width()), e.lock(), e.stateChange(function() {
				y(t.get(0)).toggleClass("fixed", this.isAboveViewport)
			})
		}
		y(".login-form .form-group:has(label)").each(function(a, t) {
			var e = y(t),
				o = e.find("label"),
				i = e.find(".form-control");
			i.on("focus", function() {
				e.addClass("is-focused")
			}), i.on("keydown", function() {
				e.addClass("is-focused")
			}), i.on("blur", function() {
				e.removeClass("is-focused"), 0 < i.val().trim().length && e.addClass("is-focused")
			}), o.on("click", function() {
				i.focus()
			}), 0 < i.val().trim().length && e.addClass("is-focused")
		})
	});
	var e = 0;
	y(a).resize(function() {
		clearTimeout(e), e = setTimeout(trigger_resizable, 200)
	})
}(jQuery, window);
var sm_duration = .2,
	sm_transition_delay = 150;

function setup_sidebar_menu() {
	if (public_vars.$sidebarMenu.length) {
		var e = public_vars.$sidebarMenu.find("li:has(> ul)"),
			a = public_vars.$sidebarMenu.hasClass("toggle-others");
		e.filter(".active").addClass("expanded"), is("largescreen") && 0 == public_vars.$sidebarMenu.hasClass("collapsed") && $(window).on("resize", function() {
			is("tabletscreen") ? (public_vars.$sidebarMenu.addClass("collapsed"), ps_destroy()) : is("largescreen") && (public_vars.$sidebarMenu.removeClass("collapsed"), ps_init())
		}), e.each(function(o, t) {
			var e = jQuery(t),
				i = e.children("a"),
				r = e.children("ul");
			e.addClass("has-sub"), i.on("click", function(o) {
				o.preventDefault(), a && sidebar_menu_close_items_siblings(e), e.hasClass("expanded") || e.hasClass("opened") ? sidebar_menu_item_collapse(e, r) : sidebar_menu_item_expand(e, r)
			})
		})
	}
}

function sidebar_menu_item_expand(a, s) {
	if (!(a.data("is-busy") || a.parent(".main-menu").length && public_vars.$sidebarMenu.hasClass("collapsed"))) {
		a.addClass("expanded").data("is-busy", !0), s.show();
		var l = s.children(),
			t = s.outerHeight(),
			e = (jQuery(window).height(), a.outerHeight(), public_vars.$sidebarMenu.scrollTop());
		a.position().top, public_vars.$sidebarMenu.hasClass("fit-in-viewport"), l.addClass("is-hidden"), s.height(0), TweenMax.to(s, sm_duration, {
			css: {
				height: t
			},
			onUpdate: ps_update,
			onComplete: function() {
				s.height("")
			}
		});
		var i = a.data("sub_i_1"),
			n = a.data("sub_i_2");
		window.clearTimeout(i), i = setTimeout(function() {
			l.each(function(a, t) {
				jQuery(t).addClass("is-shown")
			});
			var o = sm_transition_delay * l.length,
				r = parseFloat(l.eq(0).css("transition-duration")),
				e = parseFloat(l.last().css("transition-delay"));
			r && e && (o = 1e3 * (r + e)), window.clearTimeout(n), n = setTimeout(function() {
				l.removeClass("is-hidden is-shown")
			}, o), a.data("is-busy", !1)
		}, 0), a.data("sub_i_1", i), a.data("sub_i_2", n)
	}
}

function sidebar_menu_item_collapse(a, t) {
	if (!a.data("is-busy")) {
		var e = t.children();
		a.removeClass("expanded").data("is-busy", !0), e.addClass("hidden-item"), TweenMax.to(t, sm_duration, {
			css: {
				height: 0
			},
			onUpdate: ps_update,
			onComplete: function() {
				a.data("is-busy", !1).removeClass("opened"), t.attr("style", "").hide(), e.removeClass("hidden-item"), a.find("li.expanded ul").attr("style", "").hide().parent().removeClass("expanded"), ps_update(!0)
			}
		})
	}
}

function sidebar_menu_close_items_siblings(e) {
	e.siblings().not(e).filter(".expanded, .opened").each(function(a, t) {
		var e = jQuery(t),
			o = e.children("ul");
		sidebar_menu_item_collapse(e, o)
	})
}

function setup_horizontal_menu() {
	if (public_vars.$horizontalMenu.length) {
		var e = public_vars.$horizontalMenu.find("li:has(> ul)"),
			o = public_vars.$horizontalMenu.hasClass("click-to-expand");
		o && public_vars.$mainContent.add(public_vars.$sidebarMenu).on("click", function() {
			e.removeClass("hover")
		}), e.each(function(a, t) {
			var l = jQuery(t),
				i = l.children("a"),
				d = l.children("ul"),
				n = l.parent().is(".navbar-nav");
			l.addClass("has-sub"), i.on("click", function(e) {
				isxs() && (e.preventDefault(), sidebar_menu_close_items_siblings(l), l.hasClass("expanded") || l.hasClass("opened") ? sidebar_menu_item_collapse(l, d) : sidebar_menu_item_expand(l, d))
			}), o ? i.on("click", function(a) {
				var o;
				a.preventDefault(), isxs() || (n ? (e.filter(function(a, t) {
					return jQuery(t).parent().is(".navbar-nav")
				}).not(l).removeClass("hover"), l.toggleClass("hover")) : 0 == l.hasClass("expanded") ? (l.addClass("expanded"), d.addClass("is-visible"), o = d.outerHeight(), d.height(0), TweenLite.to(d, .15, {
					css: {
						height: o
					},
					ease: Sine.easeInOut,
					onComplete: function() {
						d.attr("style", "")
					}
				}), l.siblings().find("> ul.is-visible").not(d).each(function(a, t) {
					var e = jQuery(t);
					o = e.outerHeight(), e.removeClass("is-visible").height(o), e.parent().removeClass("expanded"), TweenLite.to(e, .15, {
						css: {
							height: 0
						},
						onComplete: function() {
							e.attr("style", "")
						}
					})
				})) : (o = d.outerHeight(), l.removeClass("expanded"), d.removeClass("is-visible").height(o), TweenLite.to(d, .15, {
					css: {
						height: 0
					},
					onComplete: function() {
						d.attr("style", "")
					}
				})))
			}) : l.hoverIntent({
				over: function() {
					isxs() || (n ? l.addClass("hover") : (d.addClass("is-visible"), sub_height = d.outerHeight(), d.height(0), TweenLite.to(d, .25, {
						css: {
							height: sub_height
						},
						ease: Sine.easeInOut,
						onComplete: function() {
							d.attr("style", "")
						}
					})))
				},
				out: function() {
					isxs() || (n ? l.removeClass("hover") : (sub_height = d.outerHeight(), l.removeClass("expanded"), d.removeClass("is-visible").height(sub_height), TweenLite.to(d, .25, {
						css: {
							height: 0
						},
						onComplete: function() {
							d.attr("style", "")
						}
					})))
				},
				timeout: 200,
				interval: n ? 10 : 100
			})
		})
	}
}

function stickFooterToBottom() {
	if (public_vars.$mainFooter.add(public_vars.$mainContent).add(public_vars.$sidebarMenu).attr("style", ""), isxs()) return !1;
	if (public_vars.$mainFooter.hasClass("sticky")) {
		var a = jQuery(window).height(),
			t = public_vars.$mainFooter.outerHeight(!0),
			e = public_vars.$mainFooter.position().top + t,
			o = public_vars.$horizontalNavbar.outerHeight();
		a > e - parseInt(public_vars.$mainFooter.css("marginTop"), 10) && public_vars.$mainFooter.css({
			marginTop: a - e - o
		})
	}
}

function ps_update(e) {
	if (!isxs() && jQuery.isFunction(jQuery.fn.perfectScrollbar)) {
		if (public_vars.$sidebarMenu.hasClass("collapsed")) return;
		public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar("update"), e && (ps_destroy(), ps_init())
	}
}

function ps_init() {
	if (!isxs() && jQuery.isFunction(jQuery.fn.perfectScrollbar)) {
		if (public_vars.$sidebarMenu.hasClass("collapsed") || !public_vars.$sidebarMenu.hasClass("fixed")) return;
		public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar({
			wheelSpeed: 1,
			wheelPropagation: public_vars.wheelPropagation
		})
	}
}

function ps_destroy() {
	jQuery.isFunction(jQuery.fn.perfectScrollbar) && public_vars.$sidebarMenu.find(".sidebar-menu-inner").perfectScrollbar("destroy")
}

function cbr_replace() {
	var e = jQuery("input[type=\"checkbox\"].cbr, input[type=\"radio\"].cbr").filter(":not(.cbr-done)");
	e.each(function(a, t) {
		var l = jQuery(t),
			e = l.is(":radio"),
			i = l.is(":checkbox"),
			n = l.is(":disabled");
		if (e || i) {
			l.after("<div class=\"cbr-replaced\"><div class=\"cbr-input\"></div><div class=\"cbr-state\"><span></span></div></div>"), l.addClass("cbr-done");
			var r = l.next();
			r.find(".cbr-input").append(l), e && r.addClass("cbr-radio"), n && r.addClass("cbr-disabled"), l.is(":checked") && r.addClass("cbr-checked"), jQuery.each(["primary", "secondary", "success", "danger", "warning", "info", "purple", "blue", "red", "gray", "pink", "yellow", "orange", "turquoise"], function(a, t) {
				var e = "cbr-" + t;
				l.hasClass(e) && (r.addClass(e), l.removeClass(e))
			}), r.on("click", function(a) {
				e && l.prop("checked") || r.parent().is("label") || 0 == jQuery(a.target).is(l) && (l.prop("checked", !l.is(":checked")), l.trigger("change"))
			}), l.on("change", function() {
				r.removeClass("cbr-checked"), l.is(":checked") && r.addClass("cbr-checked"), cbr_recheck()
			})
		}
	})
}

function cbr_recheck() {
	jQuery("input.cbr-done").each(function(a, t) {
		var e = jQuery(t),
			o = e.is(":radio"),
			i = (e.is(":checkbox"), e.is(":disabled")),
			n = e.closest(".cbr-replaced");
		i && n.addClass("cbr-disabled"), o && !e.prop("checked") && n.hasClass("cbr-checked") && n.removeClass("cbr-checked")
	})
}

function attrDefault(a, t, e) {
	return void 0 === a.data(t) ? e : a.data(t)
}

function callback_test() {
	alert("Callback function executed! No. of arguments: " + arguments.length + "\n\nSee console log for outputed of the arguments."), console.log(arguments)
}

function date(l, t) {
	function d(a, t) {
		return i[a] ? i[a]() : t
	}

	function p(a, o) {
		for (a = a + ""; a.length < o;) a = "0" + a;
		return a
	}
	var s, i, e = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		o = /\\?(.?)/gi;
	return i = {
		d: function() {
			return p(i.j(), 2)
		},
		D: function() {
			return i.l().slice(0, 3)
		},
		j: function() {
			return s.getDate()
		},
		l: function() {
			return e[i.w()] + "day"
		},
		N: function() {
			return i.w() || 7
		},
		S: function() {
			var a = i.j(),
				t = a % 10;
			return 3 >= t && 1 == parseInt(a % 100 / 10, 10) && (t = 0), ["st", "nd", "rd"][t - 1] || "th"
		},
		w: function() {
			return s.getDay()
		},
		z: function() {
			var a = new Date(i.Y(), i.n() - 1, i.j()),
				t = new Date(i.Y(), 0, 1);
			return Math.round((a - t) / 864e5)
		},
		W: function() {
			var a = new Date(i.Y(), i.n() - 1, i.j() - i.N() + 3),
				t = new Date(a.getFullYear(), 0, 4);
			return p(1 + Math.round((a - t) / 864e5 / 7), 2)
		},
		F: function() {
			return e[6 + i.n()]
		},
		m: function() {
			return p(i.n(), 2)
		},
		M: function() {
			return i.F().slice(0, 3)
		},
		n: function() {
			return s.getMonth() + 1
		},
		t: function() {
			return new Date(i.Y(), i.n(), 0).getDate()
		},
		L: function() {
			var e = i.Y();
			return 0 == e % 4 & 0 != e % 100 | 0 == e % 400
		},
		o: function() {
			var a = i.n(),
				t = i.W();
			return i.Y() + (12 === a && 9 > t ? 1 : 1 === a && 9 < t ? -1 : 0)
		},
		Y: function() {
			return s.getFullYear()
		},
		y: function() {
			return i.Y().toString().slice(-2)
		},
		a: function() {
			return 11 < s.getHours() ? "pm" : "am"
		},
		A: function() {
			return i.a().toUpperCase()
		},
		B: function() {
			var a = 3600 * s.getUTCHours(),
				t = 60 * s.getUTCMinutes(),
				e = s.getUTCSeconds();
			return p(Math.floor((a + t + e + 3600) / 86.4) % 1e3, 3)
		},
		g: function() {
			return i.G() % 12 || 12
		},
		G: function() {
			return s.getHours()
		},
		h: function() {
			return p(i.g(), 2)
		},
		H: function() {
			return p(i.G(), 2)
		},
		i: function() {
			return p(s.getMinutes(), 2)
		},
		s: function() {
			return p(s.getSeconds(), 2)
		},
		u: function() {
			return p(1e3 * s.getMilliseconds(), 6)
		},
		e: function() {
			throw "Not supported (see source code of date() for timezone on how to add support)"
		},
		I: function() {
			return new Date(i.Y(), 0) - Date.UTC(i.Y(), 0) == new Date(i.Y(), 6) - Date.UTC(i.Y(), 6) ? 0 : 1
		},
		O: function() {
			var a = s.getTimezoneOffset(),
				t = Math.abs(a);
			return (0 < a ? "-" : "+") + p(100 * Math.floor(t / 60) + t % 60, 4)
		},
		P: function() {
			var e = i.O();
			return e.substr(0, 3) + ":" + e.substr(3, 2)
		},
		T: function() {
			return "UTC"
		},
		Z: function() {
			return 60 * -s.getTimezoneOffset()
		},
		c: function() {
			return "Y-m-d\\TH:i:sP".replace(o, d)
		},
		r: function() {
			return "D, d M Y H:i:s O".replace(o, d)
		},
		U: function() {
			return 0 | s / 1e3
		}
	}, this.date = function(a, t) {
		return s = void 0 === t ? new Date : t instanceof Date ? new Date(t) : new Date(1e3 * t), a.replace(o, d)
	}, this.date(l, t)
}

function rtl() {
	return "boolean" == typeof window.isRTL || (window.isRTL = "rtl" == jQuery("html").get(0).dir), window.isRTL
}

function show_loading_bar(a) {
	var l = {
		pct: 0,
		delay: 1.3,
		wait: 0,
		before: function() {},
		finish: function() {},
		resetOnEnd: !0
	};
	"object" == typeof a ? l = jQuery.extend(l, a) : "number" == typeof a && (l.pct = a), 100 < l.pct ? l.pct = 100 : 0 > l.pct && (l.pct = 0);
	var t = jQuery,
		i = t(".xenon-loading-bar");
	0 == i.length && (i = t("<div class=\"xenon-loading-bar progress-is-hidden\"><span data-pct=\"0\"></span></div>"), public_vars.$body.append(i));
	var d = i.find("span"),
		n = d.data("pct"),
		r = n > l.pct;
	l.before(n), TweenMax.to(d, l.delay, {
		css: {
			width: l.pct + "%"
		},
		delay: l.wait,
		ease: r ? Expo.easeOut : Expo.easeIn,
		onStart: function() {
			i.removeClass("progress-is-hidden")
		},
		onComplete: function() {
			var e = d.data("pct");
			100 == e && l.resetOnEnd && hide_loading_bar(), l.finish(e)
		},
		onUpdate: function() {
			d.data("pct", parseInt(d.get(0).style.width, 10))
		}
	})
}

function hide_loading_bar() {
	var a = jQuery(".xenon-loading-bar"),
		t = a.find("span");
	a.addClass("progress-is-hidden"), t.width(0).data("pct", 0)
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
	function u(a, t, e, o) {
		this.a = a, this.b = t, this.c = e, this.d = o, this.da = o - a, this.ca = e - a, this.ba = t - a
	}

	function P(m, t, e, i) {
		var s = {
			a: m
		}, n = {}, r = {}, o = {
				c: i
			}, a = (m + t) / 2,
			l = (t + e) / 2,
			g = (e + i) / 2,
			c = (a + l) / 2,
			u = (l + g) / 2,
			p = (u - c) / 8;
		return s.b = a + (m - a) / 4, n.b = c + p, s.c = n.a = (s.b + n.b) / 2, n.c = r.a = (c + u) / 2, r.b = u - p, o.b = g + (i - g) / 4, r.c = o.a = (r.b + o.b) / 2, [s, n, r, o]
	}

	function n(T, t, e, i, s) {
		var n, x, w, C, A, R, O, I, E, z, L, V, F, N = T.length - 1,
			v = 0,
			M = T[0].a;
		for (n = 0; n < N; n++) x = (A = T[v]).a, w = A.d, C = T[v + 1].d, I = s ? (L = k[n], F = .25 * ((V = S[n]) + L) * t / (i ? .5 : D[n] || .5), w - ((R = w - (w - x) * (i ? .5 * t : 0 === L ? 0 : F / L)) + (((O = w + (C - w) * (i ? .5 * t : 0 === V ? 0 : F / V)) - R) * (3 * L / (L + V) + .5) / 4 || 0))) : w - ((R = w - .5 * (w - x) * t) + (O = w + .5 * (C - w) * t)) / 2, R += I, O += I, A.c = E = R, A.b = 0 === n ? M = A.a + .6 * (A.c - A.a) : M, A.da = w - x, A.ca = E - x, A.ba = M - x, e ? (z = P(x, M, E, w), T.splice(v, 1, z[0], z[1], z[2], z[3]), v += 4) : v++, M = O;
		(A = T[v]).b = M, A.c = M + .4 * (A.d - M), A.da = A.d - A.a, A.ca = A.c - A.a, A.ba = M - A.a, e && (z = P(A.a, M, A.c, A.d), T.splice(v, 1, z[0], z[1], z[2], z[3]))
	}

	function i(d, p, e, i) {
		var s, m, g, _, f, b, v = [];
		if (i)
			for (m = (d = [i].concat(d)).length; - 1 < --m;) "string" == typeof(b = d[m][p]) && "=" === b.charAt(1) && (d[m][p] = i[p] + +(b.charAt(0) + b.substr(2)));
		if (0 > (s = d.length - 2)) return v[0] = new u(d[0][p], 0, 0, d[-1 > s ? 0 : 1][p]), v;
		for (m = 0; m < s; m++) g = d[m][p], _ = d[m + 1][p], v[m] = new u(g, 0, 0, _), e && (f = d[m + 2][p], k[m] = (k[m] || 0) + (_ - g) * (_ - g), S[m] = (S[m] || 0) + (f - _) * (f - _));
		return v[m] = new u(d[m][p], 0, 0, d[m + 1][p]), v
	}

	function m(g, b, v, y, s, T) {
		var x, w, C, P, A, R, O, I, E = {}, f = [],
			m = T || g[0];
		for (w in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == b && (b = 1), g[0]) f.push(w);
		if (1 < g.length) {
			for (I = g[g.length - 1], O = !0, x = f.length; - 1 < --x;)
				if (w = f[x], .05 < Math.abs(m[w] - I[w])) {
					O = !1;
					break
				}
			O && (g = g.concat(), T && g.unshift(T), g.push(g[1]), T = g[g.length - 3])
		}
		for (k.length = S.length = D.length = 0, x = f.length; - 1 < --x;) w = f[x], d[w] = -1 !== s.indexOf("," + w + ","), E[w] = i(g, w, d[w], T);
		for (x = k.length; - 1 < --x;) k[x] = Math.sqrt(k[x]), S[x] = Math.sqrt(S[x]);
		if (!y) {
			for (x = f.length; - 1 < --x;)
				if (d[w])
					for (R = (C = E[f[x]]).length - 1, P = 0; P < R; P++) A = C[P + 1].da / S[P] + C[P].da / k[P], D[P] = (D[P] || 0) + A * A;
			for (x = D.length; - 1 < --x;) D[x] = Math.sqrt(D[x])
		}
		for (x = f.length, P = v ? 4 : 1; - 1 < --x;) C = E[w = f[x]], n(C, b, v, y, d[w]), O && (C.splice(0, P), C.splice(C.length - P, P));
		return E
	}

	function a(g, t, e) {
		for (var i, _, f, b, v, y, T, x, w, C, k, P = g.length; - 1 < --P;)
			for (f = (C = g[P]).a, b = C.d - f, v = C.c - f, y = C.b - f, i = _ = 0, x = 1; x <= e; x++) i = _ - (_ = ((T = 1 / e * x) * T * b + 3 * (w = 1 - T) * (T * v + w * y)) * T), t[k = P * e + x - 1] = (t[k] || 0) + i * i
	}
	var o, l, k, S, D, d, b, r;
	_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, d, T) {
		function f(a) {
			var t, o = [],
				i = a.length;
			for (t = 0; t !== i; o.push(a[t++]));
			return o
		}

		function o(p, t, m, u) {
			t = !1 !== t, m = !1 !== m;
			for (var g, _, f = c(u = !1 !== u), o = t && m && u, a = f.length; - 1 < --a;) _ = f[a], (o || _ instanceof d || (g = _.target === _.vars.onComplete) && m || t && !g) && _.paused(p)
		}
		var m = function(a, t, e) {
			T.call(this, a, t, e), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = m.prototype.render
		}, x = 1e-10,
			l = T._internals,
			g = l.isSelector,
			_ = l.isArray,
			e = m.prototype = T.to({}, .1, {}),
			b = [];
		m.version = "1.13.1", e.constructor = m, e.kill()._gc = !1, m.killTweensOf = m.killDelayedCallsTo = T.killTweensOf, m.getTweensOf = T.getTweensOf, m.lagSmoothing = T.lagSmoothing, m.ticker = T.ticker, m.render = T.render, e.invalidate = function() {
			return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), T.prototype.invalidate.call(this)
		}, e.updateTo = function(o, t) {
			var e, l = this.ratio;
			for (e in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), o) this.vars[e] = o[e];
			if (this._initted)
				if (t) this._initted = !1;
				else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && T._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
				var s = this._time;
				this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
			} else if (0 < this._time) {
				this._initted = !1, this._init();
				for (var n, d = this._firstPT; d;) n = d.s + d.c, d.c *= 1 / (1 - l), d.s = n - d.c, d = d._next
			}
			return this
		}, e.render = function(g, v, e) {
			this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
			var y, T, w, C, k, P, S, D, A = this._dirty ? this.totalDuration() : this._totalDuration,
				u = this._time,
				p = this._totalTime,
				d = this._cycle,
				f = this._duration,
				m = this._rawPrevTime;
			if (A <= g ? (this._totalTime = A, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = f, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (y = !0, T = "onComplete"), 0 !== f || !this._initted && this.vars.lazy && !e || (this._startTime === this._timeline._duration && (g = 0), (0 == g || 0 > m || m === x) && m !== g && (e = !0, x < m && (T = "onReverseComplete")), this._rawPrevTime = D = !v || g || m === g ? g : x)) : 1e-7 > g ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === f && 0 < m && m !== x) && (T = "onReverseComplete", y = this._reversed), 0 > g ? (this._active = !1, 0 !== f || !this._initted && this.vars.lazy && !e || (0 <= m && (e = !0), this._rawPrevTime = D = !v || g || m === g ? g : x)) : this._initted || (e = !0)) : (this._totalTime = this._time = g, 0 !== this._repeat && (C = f + this._repeatDelay, this._cycle = this._totalTime / C >> 0, 0 !== this._cycle && this._cycle === this._totalTime / C && this._cycle--, this._time = this._totalTime - this._cycle * C, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? this._time = f : 0 > this._time && (this._time = 0)), this._easeType ? (k = this._time / f, (1 === (P = this._easeType) || 3 === P && .5 <= k) && (k = 1 - k), 3 === P && (k *= 2), 1 === (S = this._easePower) ? k *= k : 2 === S ? k *= k * k : 3 === S ? k *= k * k * k : 4 === S && (k *= k * k * k * k), this.ratio = 1 === P ? 1 - k : 2 === P ? k : .5 > this._time / f ? k / 2 : 1 - k / 2) : this.ratio = this._ease.getRatio(this._time / f)), u !== this._time || e || d !== this._cycle) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!e && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = u, this._totalTime = p, this._rawPrevTime = m, this._cycle = d, l.lazyTweens.push(this), void(this._lazy = g);
					this._time && !y ? this.ratio = this._ease.getRatio(this._time / f) : y && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== u && 0 <= g && (this._active = !0), 0 === p && (2 === this._initted && 0 < g && this._init(), this._startAt && (0 <= g ? this._startAt.render(g, v, e) : T = T || "_dummyGS"), !this.vars.onStart || 0 === this._totalTime && 0 !== f || v || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b)), w = this._firstPT; w;) w.f ? w.t[w.p](w.c * this.ratio + w.s) : w.t[w.p] = w.c * this.ratio + w.s, w = w._next;
				this._onUpdate && (0 > g && this._startAt && this._startTime && this._startAt.render(g, v, e), v || this._totalTime === p && !y || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)), this._cycle !== d && (v || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || b)), T && (!this._gc || e) && (0 > g && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(g, v, e), y && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !v && this.vars[T] && this.vars[T].apply(this.vars[T + "Scope"] || this, this.vars[T + "Params"] || b), 0 === f && this._rawPrevTime === x && D !== x && (this._rawPrevTime = 0))
			} else p !== this._totalTime && this._onUpdate && (v || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b))
		}, m.to = function(a, t, e) {
			return new m(a, t, e)
		}, m.from = function(a, t, e) {
			return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new m(a, t, e)
		}, m.fromTo = function(a, t, e, o) {
			return o.startAt = e, o.immediateRender = 0 != o.immediateRender && 0 != e.immediateRender, new m(a, t, o)
		}, m.staggerTo = m.allTo = function(v, y, e, i, x, n, r) {
			function o() {
				e.onComplete && e.onComplete.apply(e.onCompleteScope || this, arguments), x.apply(r || this, n || b)
			}
			i = i || 0;
			var a, w, C, k, P = e.delay || 0,
				S = [];
			for (_(v) || ("string" == typeof v && (v = T.selector(v) || v), g(v) && (v = f(v))), a = v.length, C = 0; C < a; C++) {
				for (k in w = {}, e) w[k] = e[k];
				w.delay = P, C === a - 1 && x && (w.onComplete = o), S[C] = new m(v[C], y, w), P += i
			}
			return S
		}, m.staggerFrom = m.allFrom = function(a, t, e, i, s, n, r) {
			return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, m.staggerTo(a, t, e, i, s, n, r)
		}, m.staggerFromTo = m.allFromTo = function(l, t, e, i, s, n, r, o) {
			return i.startAt = e, i.immediateRender = 0 != i.immediateRender && 0 != e.immediateRender, m.staggerTo(l, t, i, s, n, r, o)
		}, m.delayedCall = function(a, t, e, o, i) {
			return new m(t, 0, {
				delay: a,
				onComplete: t,
				onCompleteParams: e,
				onCompleteScope: o,
				onReverseComplete: t,
				onReverseCompleteParams: e,
				onReverseCompleteScope: o,
				immediateRender: !1,
				useFrames: i,
				overwrite: 0
			})
		}, m.set = function(a, t) {
			return new m(a, 0, t)
		}, m.isTweening = function(e) {
			return 0 < T.getTweensOf(e, !0).length
		};
		var p = function(a, t) {
			for (var e = [], o = 0, r = a._first; r;) r instanceof T ? e[o++] = r : (t && (e[o++] = r), o = (e = e.concat(p(r, t))).length), r = r._next;
			return e
		}, c = m.getAllTweens = function(e) {
				return p(a._rootTimeline, e).concat(p(a._rootFramesTimeline, e))
			};
		return m.killAll = function(p, t, m, u) {
			null == t && (t = !0), null == m && (m = !0);
			var s, g, _, f = c(0 != u),
				a = f.length,
				l = t && m && u;
			for (_ = 0; _ < a; _++) g = f[_], (l || g instanceof d || (s = g.target === g.vars.onComplete) && m || t && !s) && (p ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
		}, m.killChildTweensOf = function(d, p) {
			if (null != d) {
				var e, c, u, h, b, v = l.tweenLookup;
				if ("string" == typeof d && (d = T.selector(d) || d), g(d) && (d = f(d)), _(d))
					for (h = d.length; - 1 < --h;) m.killChildTweensOf(d[h], p);
				else {
					for (u in e = [], v)
						for (c = v[u].target.parentNode; c;) c === d && (e = e.concat(v[u].tweens)), c = c.parentNode;
					for (b = e.length, h = 0; h < b; h++) p && e[h].totalTime(e[h].totalDuration()), e[h]._enabled(!1, !1)
				}
			}
		}, (m.pauseAll = function(a, t, e) {
			o(!0, a, t, e)
		}, m.resumeAll = function(a, t, e) {
			o(!1, a, t, e)
		}, m.globalTimeScale = function(o) {
			var n = a._rootTimeline,
				r = T.ticker.time;
			return arguments.length ? (o = o || x, n._startTime = r - (r - n._startTime) * n._timeScale / o, n = a._rootFramesTimeline, r = T.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / o, n._timeScale = a._rootTimeline._timeScale = o, o) : n._timeScale
		}, e.progress = function(e) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
		}, e.totalProgress = function(e) {
			return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
		}, e.time = function(a, o) {
			return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, o)) : this._time
		}, e.duration = function(e) {
			return arguments.length ? a.prototype.duration.call(this, e) : this._duration
		}, e.totalDuration = function(e) {
			return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
		}, e.repeat = function(e) {
			return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
		}, e.repeatDelay = function(e) {
			return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
		}, e.yoyo = function(e) {
			return arguments.length ? (this._yoyo = e, this) : this._yoyo
		}, m)
	}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(T, c, u) {
		function p(a) {
			c.call(this, a), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
			var t, o, n = this.vars;
			for (o in n) t = n[o], l(t) && -1 !== t.join("").indexOf("{self}") && (n[o] = this._swapSelfInParams(t));
			l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
		}

		function a(a) {
			var t, o = {};
			for (t in a) o[t] = a[t];
			return o
		}

		function r(a, t, e, o) {
			a._timeline.pause(a._startTime), t && t.apply(o || a._timeline, e || _)
		}
		var d = 1e-10,
			i = u._internals,
			n = i.isSelector,
			l = i.isArray,
			m = i.lazyTweens,
			g = i.lazyRender,
			_ = [],
			f = _gsScope._gsDefine.globals,
			t = p.prototype = new c;
		return p.version = "1.13.1", t.constructor = p, t.kill()._gc = !1, t.to = function(a, t, e, o) {
			var i = e.repeat && f.TweenMax || u;
			return t ? this.add(new i(a, t, e), o) : this.set(a, e, o)
		}, t.from = function(a, t, e, o) {
			return this.add((e.repeat && f.TweenMax || u).from(a, t, e), o)
		}, t.fromTo = function(a, t, e, o, i) {
			var n = o.repeat && f.TweenMax || u;
			return t ? this.add(n.fromTo(a, t, e, o), i) : this.set(a, o, i)
		}, t.staggerTo = function(d, c, e, i, m, g, r, o) {
			var _, f = new p({
					onComplete: g,
					onCompleteParams: r,
					onCompleteScope: o,
					smoothChildTiming: this.smoothChildTiming
				});
			for ("string" == typeof d && (d = u.selector(d) || d), n(d) && (d = function(a) {
				var t, o = [],
					i = a.length;
				for (t = 0; t !== i; o.push(a[t++]));
				return o
			}(d)), i = i || 0, _ = 0; d.length > _; _++) e.startAt && (e.startAt = a(e.startAt)), f.to(d[_], c, a(e), _ * i);
			return this.add(f, m)
		}, t.staggerFrom = function(l, t, e, i, s, n, r, o) {
			return e.immediateRender = 0 != e.immediateRender, e.runBackwards = !0, this.staggerTo(l, t, e, i, s, n, r, o)
		}, t.staggerFromTo = function(d, t, e, i, s, n, r, o, a) {
			return i.startAt = e, i.immediateRender = 0 != i.immediateRender && 0 != e.immediateRender, this.staggerTo(d, t, i, s, n, r, o, a)
		}, t.call = function(a, t, e, o) {
			return this.add(u.delayedCall(0, a, t, e), o)
		}, t.set = function(a, t, e) {
			return e = this._parseTimeOrLabel(e, 0, !0), null == t.immediateRender && (t.immediateRender = e === this._time && !this._paused), this.add(new u(a, 0, t), e)
		}, p.exportRoot = function(a, o) {
			null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
			var l, d, c = new p(a),
				n = c._timeline;
			for (null == o && (o = !0), n._remove(c, !0), c._startTime = 0, c._rawPrevTime = c._time = c._totalTime = n._time, l = n._first; l;) d = l._next, o && l instanceof u && l.target === l.vars.onComplete || c.add(l, l._startTime - l._delay), l = d;
			return n.add(c, 0), c
		}, t.add = function(d, m, g, _) {
			var f, b, v, y, x, w;
			if ("number" != typeof m && (m = this._parseTimeOrLabel(m, 0, !0, d)), !(d instanceof T)) {
				if (d instanceof Array || d && d.push && l(d)) {
					for (g = g || "normal", _ = _ || 0, f = m, b = d.length, v = 0; v < b; v++) l(y = d[v]) && (y = new p({
						tweens: y
					})), this.add(y, f), "string" != typeof y && "function" != typeof y && ("sequence" === g ? f = y._startTime + y.totalDuration() / y._timeScale : "start" === g && (y._startTime -= y.delay())), f += _;
					return this._uncache(!0)
				}
				if ("string" == typeof d) return this.addLabel(d, m);
				if ("function" != typeof d) throw "Cannot add " + d + " into the timeline; it is not a tween, timeline, function, or string.";
				d = u.delayedCall(0, d)
			}
			if (c.prototype.add.call(this, d, m), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
				for (w = (x = this).rawTime() > d._startTime; x._timeline;) w && x._timeline.smoothChildTiming ? x.totalTime(x._totalTime, !0) : x._gc && x._enabled(!0, !1), x = x._timeline;
			return this
		}, t.remove = function(a) {
			if (a instanceof T) return this._remove(a, !1);
			if (a instanceof Array || a && a.push && l(a)) {
				for (var t = a.length; - 1 < --t;) this.remove(a[t]);
				return this
			}
			return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a)
		}, t._remove = function(a, t) {
			c.prototype._remove.call(this, a, t);
			var e = this._last;
			return e ? this._time > e._startTime + e._totalDuration / e._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
		}, t.append = function(a, t) {
			return this.add(a, this._parseTimeOrLabel(null, t, !0, a))
		}, t.insert = t.insertMultiple = function(a, t, e, o) {
			return this.add(a, t || 0, e, o)
		}, t.appendMultiple = function(a, t, e, o) {
			return this.add(a, this._parseTimeOrLabel(null, t, !0, a), e, o)
		}, t.addLabel = function(a, t) {
			return this._labels[a] = this._parseTimeOrLabel(t), this
		}, t.addPause = function(a, t, e, o) {
			return this.call(r, ["{self}", t, e, o], this, a)
		}, t.removeLabel = function(e) {
			return delete this._labels[e], this
		}, t.getLabelTime = function(e) {
			return null == this._labels[e] ? -1 : this._labels[e]
		}, t._parseTimeOrLabel = function(a, o, r, i) {
			var s;
			if (i instanceof T && i.timeline === this) this.remove(i);
			else if (i && (i instanceof Array || i.push && l(i)))
				for (s = i.length; - 1 < --s;) i[s] instanceof T && i[s].timeline === this && this.remove(i[s]);
			if ("string" == typeof o) return this._parseTimeOrLabel(o, r && "number" == typeof a && null == this._labels[o] ? a - this.duration() : 0, r);
			if (o = o || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration());
			else {
				if (-1 === (s = a.indexOf("="))) return null == this._labels[a] ? r ? this._labels[a] = this.duration() + o : o : this._labels[a] + o;
				o = parseInt(a.charAt(s - 1) + "1", 10) * +a.substr(s + 1), a = 1 < s ? this._parseTimeOrLabel(a.substr(0, s - 1), 0, r) : this.duration()
			}
			return +a + o
		}, t.seek = function(a, t) {
			return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== t)
		}, t.stop = function() {
			return this.paused(!0)
		}, t.gotoAndPlay = function(a, t) {
			return this.play(a, t)
		}, t.gotoAndStop = function(a, t) {
			return this.pause(a, t)
		}, t.render = function(f, b, e) {
			this._gc && this._enabled(!0, !1);
			var i, v, y, T, x, w = this._dirty ? this.totalDuration() : this._totalDuration,
				l = this._time,
				h = this._startTime,
				c = this._timeScale,
				u = this._paused;
			if (w <= f ? (this._totalTime = this._time = w, this._reversed || this._hasPausedChild() || (v = !0, T = "onComplete", 0 === this._duration && (0 === f || 0 > this._rawPrevTime || this._rawPrevTime === d) && this._rawPrevTime !== f && this._first && (x = !0, this._rawPrevTime > d && (T = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || f || this._rawPrevTime === f ? f : d, f = w + 1e-4) : 1e-7 > f ? (this._totalTime = this._time = 0, (0 !== l || 0 === this._duration && this._rawPrevTime !== d && (0 < this._rawPrevTime || 0 > f && 0 <= this._rawPrevTime)) && (T = "onReverseComplete", v = this._reversed), 0 > f ? (this._active = !1, 0 <= this._rawPrevTime && this._first && (x = !0), this._rawPrevTime = f) : (this._rawPrevTime = this._duration || !b || f || this._rawPrevTime === f ? f : d, f = 0, this._initted || (x = !0))) : this._totalTime = this._time = this._rawPrevTime = f, this._time !== l && this._first || e || x) {
				if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== l && 0 < f && (this._active = !0), 0 === l && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= l)
					for (i = this._first; i && (y = i._next, !this._paused || u);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (f - i._startTime) * i._timeScale, b, e) : i.render((f - i._startTime) * i._timeScale, b, e)), i = y;
				else
					for (i = this._last; i && (y = i._prev, !this._paused || u);)(i._active || l >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (f - i._startTime) * i._timeScale, b, e) : i.render((f - i._startTime) * i._timeScale, b, e)), i = y;
				this._onUpdate && (b || (m.length && g(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), T && (this._gc || h !== this._startTime && c === this._timeScale || !(0 === this._time || w >= this.totalDuration()) || (v && (m.length && g(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[T] && this.vars[T].apply(this.vars[T + "Scope"] || this, this.vars[T + "Params"] || _)))
			}
		}, t._hasPausedChild = function() {
			for (var e = this._first; e;) {
				if (e._paused || e instanceof p && e._hasPausedChild()) return !0;
				e = e._next
			}
			return !1
		}, t.getChildren = function(a, t, e, i) {
			i = i || -9999999999;
			for (var l = [], d = this._first, p = 0; d;) i > d._startTime || (d instanceof u ? !1 !== t && (l[p++] = d) : (!1 !== e && (l[p++] = d), !1 !== a && (p = (l = l.concat(d.getChildren(!0, t, e))).length))), d = d._next;
			return l
		}, t.getTweensOf = function(a, t) {
			var e, l, d = this._gc,
				n = [],
				r = 0;
			for (d && this._enabled(!0, !0), l = (e = u.getTweensOf(a)).length; - 1 < --l;)(e[l].timeline === this || t && this._contains(e[l])) && (n[r++] = e[l]);
			return d && this._enabled(!1, !0), n
		}, t._contains = function(a) {
			for (var t = a.timeline; t;) {
				if (t === this) return !0;
				t = t.timeline
			}
			return !1
		}, t.shiftChildren = function(a, t, e) {
			e = e || 0;
			for (var o, l = this._first, d = this._labels; l;) l._startTime >= e && (l._startTime += a), l = l._next;
			if (t)
				for (o in d) d[o] >= e && (d[o] += a);
			return this._uncache(!0)
		}, t._kill = function(a, t) {
			if (!a && !t) return this._enabled(!1, !1);
			for (var e = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), o = e.length, i = !1; - 1 < --o;) e[o]._kill(a, t) && (i = !0);
			return i
		}, t.clear = function(a) {
			var t = this.getChildren(!1, !0, !0),
				e = t.length;
			for (this._time = this._totalTime = 0; - 1 < --e;) t[e]._enabled(!1, !1);
			return !1 !== a && (this._labels = {}), this._uncache(!0)
		}, t.invalidate = function() {
			for (var e = this._first; e;) e.invalidate(), e = e._next;
			return this
		}, t._enabled = function(a, t) {
			if (a === this._gc)
				for (var e = this._first; e;) e._enabled(a, !0), e = e._next;
			return c.prototype._enabled.call(this, a, t)
		}, t.duration = function(e) {
			return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
		}, t.totalDuration = function(a) {
			if (arguments.length) return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this;
			if (this._dirty) {
				for (var t, o, l = 0, d = this._last, p = 999999999999; d;) t = d._prev, d._dirty && d.totalDuration(), d._startTime > p && this._sortChildren && !d._paused ? this.add(d, d._startTime - d._delay) : p = d._startTime, 0 > d._startTime && !d._paused && (l -= d._startTime, this._timeline.smoothChildTiming && (this._startTime += d._startTime / this._timeScale), this.shiftChildren(-d._startTime, !1, -9999999999), p = 0), l < (o = d._startTime + d._totalDuration / d._timeScale) && (l = o), d = t;
				this._duration = this._totalDuration = l, this._dirty = !1
			}
			return this._totalDuration
		}, t.usesFrames = function() {
			for (var e = this._timeline; e._timeline;) e = e._timeline;
			return e === T._rootFramesTimeline
		}, t.rawTime = function() {
			return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
		}, p
	}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(r, l, e) {
		function t(e) {
			r.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
		}
		var D = 1e-10,
			C = [],
			o = l._internals,
			c = o.lazyTweens,
			m = o.lazyRender,
			d = new e(null, null, 1, 0),
			a = t.prototype = new r;
		return a.constructor = t, a.kill()._gc = !1, t.version = "1.13.1", a.invalidate = function() {
			return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), r.prototype.invalidate.call(this)
		}, a.addCallback = function(a, t, e, o) {
			return this.add(l.delayedCall(0, a, e, o), t)
		}, a.removeCallback = function(a, t) {
			if (a)
				if (null == t) this._kill(null, a);
				else
					for (var e = this.getTweensOf(a, !1), o = e.length, i = this._parseTimeOrLabel(t); - 1 < --o;) e[o]._startTime === i && e[o]._enabled(!1, !1);
			return this
		}, a.tweenTo = function(a, t) {
			var o, p, c, m = {
					ease: d,
					overwrite: (t = t || {}).delay ? 2 : 1,
					useFrames: this.usesFrames(),
					immediateRender: !1
				};
			for (p in t) m[p] = t[p];
			return m.time = this._parseTimeOrLabel(a), o = Math.abs(+m.time - this._time) / this._timeScale || .001, c = new l(this, o, m), m.onStart = function() {
				c.target.paused(!0), c.vars.time !== c.target.time() && o === c.duration() && c.duration(Math.abs(c.vars.time - c.target.time()) / c.target._timeScale), t.onStart && t.onStart.apply(t.onStartScope || c, t.onStartParams || C)
			}, c
		}, a.tweenFromTo = function(a, o, e) {
			e = e || {}, a = this._parseTimeOrLabel(a), e.startAt = {
				onComplete: this.seek,
				onCompleteParams: [a],
				onCompleteScope: this
			}, e.immediateRender = !1 !== e.immediateRender;
			var n = this.tweenTo(o, e);
			return n.duration(Math.abs(n.vars.time - a) / this._timeScale || .001)
		}, a.render = function(k, P, e) {
			this._gc && this._enabled(!0, !1);
			var i, S, A, R, O, I, E = this._dirty ? this.totalDuration() : this._totalDuration,
				h = this._duration,
				z = this._time,
				L = this._totalTime,
				p = this._startTime,
				d = this._timeScale,
				f = this._rawPrevTime,
				V = this._paused,
				_ = this._cycle;
			if (E <= k ? (this._locked || (this._totalTime = E, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (S = !0, R = "onComplete", 0 === this._duration && (0 === k || 0 > f || f === D) && f !== k && this._first && (O = !0, D < f && (R = "onReverseComplete"))), this._rawPrevTime = this._duration || !P || k || this._rawPrevTime === k ? k : D, this._yoyo && 0 != (1 & this._cycle) ? this._time = k = 0 : k = (this._time = h) + 1e-4) : 1e-7 > k ? (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== z || 0 === h && f !== D && (0 < f || 0 > k && 0 <= f) && !this._locked) && (R = "onReverseComplete", S = this._reversed), 0 > k ? (this._active = !1, 0 <= f && this._first && (O = !0), this._rawPrevTime = k) : (this._rawPrevTime = h || !P || k || this._rawPrevTime === k ? k : D, k = 0, this._initted || (O = !0))) : (0 === h && 0 > f && (O = !0), this._time = this._rawPrevTime = k, this._locked || (this._totalTime = k, 0 !== this._repeat && (I = h + this._repeatDelay, this._cycle = this._totalTime / I >> 0, 0 !== this._cycle && this._cycle === this._totalTime / I && this._cycle--, this._time = this._totalTime - this._cycle * I, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? k = (this._time = h) + 1e-4 : 0 > this._time ? this._time = k = 0 : k = this._time))), this._cycle !== _ && !this._locked) {
				var g = this._yoyo && 0 != (1 & _),
					F = g === (this._yoyo && 0 != (1 & this._cycle)),
					b = this._totalTime,
					y = this._cycle,
					w = this._rawPrevTime,
					T = this._time;
				if (this._totalTime = _ * h, _ > this._cycle ? g = !g : this._totalTime += h, this._time = z, this._rawPrevTime = 0 === h ? f - 1e-4 : f, this._cycle = _, this._locked = !0, z = g ? 0 : h, this.render(z, P, 0 === h), P || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || C), F && (z = g ? h + 1e-4 : -1e-4, this.render(z, !0, !1)), this._locked = !1, this._paused && !V) return;
				this._time = T, this._totalTime = b, this._cycle = y, this._rawPrevTime = w
			}
			if (this._time !== z && this._first || e || O) {
				if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== L && 0 < k && (this._active = !0), 0 === L && this.vars.onStart && 0 !== this._totalTime && (P || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || C)), this._time >= z)
					for (i = this._first; i && (A = i._next, !this._paused || V);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (k - i._startTime) * i._timeScale, P, e) : i.render((k - i._startTime) * i._timeScale, P, e)), i = A;
				else
					for (i = this._last; i && (A = i._prev, !this._paused || V);)(i._active || z >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (k - i._startTime) * i._timeScale, P, e) : i.render((k - i._startTime) * i._timeScale, P, e)), i = A;
				this._onUpdate && (P || (c.length && m(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))), R && (this._locked || this._gc || p !== this._startTime && d === this._timeScale || !(0 === this._time || E >= this.totalDuration()) || (S && (c.length && m(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !P && this.vars[R] && this.vars[R].apply(this.vars[R + "Scope"] || this, this.vars[R + "Params"] || C)))
			} else L !== this._totalTime && this._onUpdate && (P || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || C))
		}, a.getActive = function(d, p, c) {
			null == d && (d = !0), null == p && (p = !0), null == c && (c = !1);
			var m, u, g = [],
				r = this.getChildren(d, p, c),
				o = 0,
				_ = r.length;
			for (m = 0; m < _; m++)(u = r[m]).isActive() && (g[o++] = u);
			return g
		}, a.getLabelAfter = function(a) {
			a || 0 !== a && (a = this._time);
			var o, n = this.getLabelsArray(),
				i = n.length;
			for (o = 0; o < i; o++)
				if (n[o].time > a) return n[o].name;
			return null
		}, a.getLabelBefore = function(a) {
			null == a && (a = this._time);
			for (var o = this.getLabelsArray(), e = o.length; - 1 < --e;)
				if (a > o[e].time) return o[e].name;
			return null
		}, a.getLabelsArray = function() {
			var a, o = [],
				e = 0;
			for (a in this._labels) o[e++] = {
				time: this._labels[a],
				name: a
			};
			return o.sort(function(a, t) {
				return a.time - t.time
			}), o
		}, a.progress = function(e) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
		}, a.totalProgress = function(e) {
			return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
		}, a.totalDuration = function(e) {
			return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (r.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
		}, a.time = function(a, o) {
			return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, o)) : this._time
		}, a.repeat = function(e) {
			return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
		}, a.repeatDelay = function(e) {
			return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
		}, a.yoyo = function(e) {
			return arguments.length ? (this._yoyo = e, this) : this._yoyo
		}, a.currentLabel = function(e) {
			return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
		}, t
	}, !0), l = 180 / Math.PI, k = [], S = [], D = [], d = {}, b = _gsScope._gsDefine.plugin({
		propName: "bezier",
		priority: -1,
		version: "1.3.3",
		API: 2,
		global: !0,
		init: function(d, t, g) {
			this._target = d, t instanceof Array && (t = {
				values: t
			}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
			var i, _, f, b, v, y = t.values || [],
				l = {}, h = y[0],
				c = t.autoRotate || g.vars.orientToBezier;
			for (i in this._autoRotate = c ? c instanceof Array ? c : [
				["x", "y", "rotation", !0 === c ? 0 : +c || 0]
			] : null, h) this._props.push(i);
			for (f = this._props.length; - 1 < --f;) i = this._props[f], this._overwriteProps.push(i), _ = this._func[i] = "function" == typeof d[i], l[i] = _ ? d[i.indexOf("set") || "function" != typeof d["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(d[i]), v || l[i] !== y[0][i] && (v = l);
			if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? m(y, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, v) : function(b, v, y) {
				var i, T, x, w, C, k, P, S, D, A, R, O = {}, f = "cubic" === (v = v || "soft") ? 3 : 2,
					m = "soft" === v,
					_ = [];
				if (m && y && (b = [y].concat(b)), null == b || 1 + f > b.length) throw "invalid Bezier data";
				for (D in b[0]) _.push(D);
				for (k = _.length; - 1 < --k;) {
					for (O[D = _[k]] = C = [], A = 0, S = b.length, P = 0; P < S; P++) i = null == y ? b[P][D] : "string" == typeof(R = b[P][D]) && "=" === R.charAt(1) ? y[D] + +(R.charAt(0) + R.substr(2)) : +R, m && 1 < P && P < S - 1 && (C[A++] = (i + C[A - 2]) / 2), C[A++] = i;
					for (S = A - f + 1, P = A = 0; P < S; P += f) i = C[P], T = C[P + 1], x = C[P + 2], w = 2 == f ? 0 : C[P + 3], C[A++] = R = 3 == f ? new u(i, T, x, w) : new u(i, (2 * T + i) / 3, (2 * T + x) / 3, x);
					C.length = A
				}
				return O
			}(y, t.type, l), this._segCount = this._beziers[i].length, this._timeRes) {
				var T = function(d, t) {
					var m, g, _, f, b = [],
						o = [],
						v = 0,
						y = 0,
						T = (t = t >> 0 || 6) - 1,
						c = [],
						u = [];
					for (m in d) a(d[m], b, t);
					for (_ = b.length, g = 0; g < _; g++) v += Math.sqrt(b[g]), u[f = g % t] = v, f === T && (y += v, c[f = g / t >> 0] = u, o[f] = y, v = 0, u = []);
					return {
						length: y,
						lengths: o,
						segments: c
					}
				}(this._beziers, this._timeRes);
				this._length = T.length, this._lengths = T.lengths, this._segments = T.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
			}
			if (c = this._autoRotate)
				for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), f = c.length; - 1 < --f;) {
					for (b = 0; 3 > b; b++) i = c[f][b], this._func[i] = "function" == typeof d[i] && d[i.indexOf("set") || "function" != typeof d["get" + i.substr(3)] ? i : "get" + i.substr(3)];
					i = c[f][2], this._initialRotations[f] = this._func[i] ? this._func[i].call(this._target) : this._target[i]
				}
			return this._startRatio = g.vars.runBackwards ? 1 : 0, !0
		},
		set: function(x) {
			var C, k, P, S, D, A, R, O, I, E, z = this._segCount,
				u = this._func,
				p = this._target,
				d = x !== this._startRatio;
			if (this._timeRes) {
				if (I = this._lengths, E = this._curSeg, x *= this._length, P = this._li, x > this._l2 && P < z - 1) {
					for (O = z - 1; P < O && x >= (this._l2 = I[++P]););
					this._l1 = I[P - 1], this._li = P, this._curSeg = E = this._segments[P], this._s2 = E[this._s1 = this._si = 0]
				} else if (this._l1 > x && 0 < P) {
					for (; 0 < P && (this._l1 = I[--P]) >= x;);
					0 === P && this._l1 > x ? this._l1 = 0 : P++, this._l2 = I[P], this._li = P, this._curSeg = E = this._segments[P], this._s1 = E[(this._si = E.length - 1) - 1] || 0, this._s2 = E[this._si]
				}
				if (C = P, x -= this._l1, P = this._si, x > this._s2 && E.length - 1 > P) {
					for (O = E.length - 1; P < O && x >= (this._s2 = E[++P]););
					this._s1 = E[P - 1], this._si = P
				} else if (this._s1 > x && 0 < P) {
					for (; 0 < P && (this._s1 = E[--P]) >= x;);
					0 === P && this._s1 > x ? this._s1 = 0 : P++, this._s2 = E[P], this._si = P
				}
				A = (P + (x - this._s1) / (this._s2 - this._s1)) * this._prec
			} else A = (x - (C = 0 > x ? 0 : 1 <= x ? z - 1 : z * x >> 0) * (1 / z)) * z;
			for (k = 1 - A, P = this._props.length; - 1 < --P;) S = this._props[P], R = (A * A * (D = this._beziers[S][C]).da + 3 * k * (A * D.ca + k * D.ba)) * A + D.a, this._round[S] && (R = Math.round(R)), u[S] ? p[S](R) : p[S] = R;
			if (this._autoRotate) {
				var f, L, V, F, N, M, Y, U = this._autoRotate;
				for (P = U.length; - 1 < --P;) S = U[P][2], M = U[P][3] || 0, Y = !0 === U[P][4] ? 1 : l, D = this._beziers[U[P][0]], f = this._beziers[U[P][1]], D && f && (D = D[C], f = f[C], L = D.a + (D.b - D.a) * A, L += ((F = D.b + (D.c - D.b) * A) - L) * A, F += (D.c + (D.d - D.c) * A - F) * A, V = f.a + (f.b - f.a) * A, V += ((N = f.b + (f.c - f.b) * A) - V) * A, N += (f.c + (f.d - f.c) * A - N) * A, R = d ? Math.atan2(N - V, F - L) * Y + M : this._initialRotations[P], u[S] ? p[S](R) : p[S] = R)
			}
		}
	}), r = b.prototype, b.bezierThrough = m, b.cubicToQuadratic = P, b._autoCSS = !0, b.quadraticToCubic = function(a, t, e) {
		return new u(a, (2 * t + a) / 3, (2 * t + e) / 3, e)
	}, b._cssRegister = function() {
		var a = _gsScope._gsDefine.globals.CSSPlugin;
		if (a) {
			var t = a._internals,
				e = t._parseToProxy,
				d = t._setPluginRatio,
				g = t.CSSPropTween;
			t._registerComplexSpecialProp("bezier", {
				parser: function(m, t, _, i, s, f) {
					t instanceof Array && (t = {
						values: t
					}), f = new b;
					var v, y, T, x = t.values,
						h = x.length - 1,
						c = [],
						u = {};
					if (0 > h) return s;
					for (v = 0; v <= h; v++) T = e(m, x[v], i, s, f, h !== v), c[v] = T.end;
					for (y in t) u[y] = t[y];
					return u.values = c, (s = new g(m, "bezier", 0, 0, T.pt, 2)).data = T, s.plugin = f, s.setRatio = d, 0 === u.autoRotate && (u.autoRotate = !0), !u.autoRotate || u.autoRotate instanceof Array || (v = !0 === u.autoRotate ? 0 : +u.autoRotate, u.autoRotate = null == T.end.left ? null != T.end.x && [
						["x", "y", "rotation", v, !1]
					] : [
						["left", "top", "rotation", v, !1]
					]), u.autoRotate && (i._transform || i._enableTransforms(!1), T.autoRotate = i._target._gsTransform), f._onInitTween(T.proxy, u, i._tween), s
				}
			})
		}
	}, r._roundProps = function(a, t) {
		for (var e = this._overwriteProps, o = e.length; - 1 < --o;)(a[e[o]] || a.bezier || a.bezierThrough) && (this._round[e[o]] = t)
	}, r._kill = function(a) {
		var t, o, n = this._props;
		for (t in this._beziers)
			if (t in a)
				for (delete this._beziers[t], delete this._func[t], o = n.length; - 1 < --o;) n[o] === t && n.splice(o, 1);
		return this._super._kill.call(this, a)
	}, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(ee, te) {
		function r(a, t) {
			return t.toUpperCase()
		}

		function o(e) {
			return N.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
		}

		function ae(e) {
			window.console && console.log(e)
		}

		function oe(a, o) {
			var r, l, d = (o = o || W).style;
			if (void 0 !== d[a]) return a;
			for (a = a.charAt(0).toUpperCase() + a.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], l = 5; - 1 < --l && void 0 === d[r[l] + a];);
			return 0 <= l ? (G = "-" + ($e = 3 === l ? "ms" : r[l]).toLowerCase() + "-", $e + a) : null
		}

		function _(a, t) {
			var l, d, p = {};
			if (t = t || Ae(a, null)) {
				if (l = t.length)
					for (; - 1 < --l;) p[t[l].replace(u, r)] = t.getPropertyValue(t[l]);
				else
					for (l in t) p[l] = t[l];
			} else if (t = a.currentStyle || a.style)
				for (l in t) "string" == typeof l && void 0 === p[l] && (p[l.replace(u, r)] = t[l]);
			return Z || (p.opacity = o(a)), d = Ge(a, t, !1), p.rotation = d.rotation, p.skewX = d.skewX, p.scaleX = d.scaleX, p.scaleY = d.scaleY, p.x = d.x, p.y = d.y, We && (p.z = d.z, p.rotationX = d.rotationX, p.rotationY = d.rotationY, p.scaleZ = d.scaleZ), p.filters && delete p.filters, p
		}

		function g(d, t, e, i, s) {
			var n, p, c, m = {}, l = d.style;
			for (p in e) "cssText" !== p && "length" !== p && isNaN(p) && (t[p] !== (n = e[p]) || s && s[p]) && -1 === p.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (m[p] = "auto" !== n || "left" !== p && "top" !== p ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof t[p] || "" === t[p].replace(z, "") ? n : 0 : Ie(d, p), void 0 !== l[p] && (c = new Fe(l, p, l[p], c)));
			if (i)
				for (p in i) "className" !== p && (m[p] = i[p]);
			return {
				difs: m,
				firstMPT: c
			}
		}

		function v(a, t, e) {
			var o = parseFloat("width" === t ? a.offsetWidth : a.offsetHeight),
				l = Ee[t],
				n = l.length;
			for (e = e || Ae(a, null); - 1 < --n;) o -= parseFloat(Re(a, "padding" + l[n], e, !0)) || 0, o -= parseFloat(Re(a, "border" + l[n] + "Width", e, !0)) || 0;
			return o
		}

		function b(a, o) {
			null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
			var e = a.split(" "),
				i = -1 === a.indexOf("left") ? -1 === a.indexOf("right") ? e[0] : "100%" : "0%",
				r = -1 === a.indexOf("top") ? -1 === a.indexOf("bottom") ? e[1] : "100%" : "0%";
			return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), o && (o.oxp = -1 !== i.indexOf("%"), o.oyp = -1 !== r.indexOf("%"), o.oxr = "=" === i.charAt(1), o.oyr = "=" === r.charAt(1), o.ox = parseFloat(i.replace(z, "")), o.oy = parseFloat(r.replace(z, ""))), i + " " + r + (2 < e.length ? " " + e[2] : "")
		}

		function a(a, t) {
			return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(t)
		}

		function p(a, t) {
			return null == a ? t : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * +a.substr(2) + t : parseFloat(a)
		}

		function y(l, t, e, i) {
			var s, d, p, c;
			return 1e-6 > (c = null == l ? t : "number" == typeof l ? l : (s = 360, d = l.split("_"), p = +d[0].replace(z, "") * (-1 === l.indexOf("rad") ? 1 : De) - ("=" === l.charAt(1) ? 0 : t), d.length && (i && (i[e] = t + p), -1 !== l.indexOf("short") && (p %= s) !== p % 180 && (p = 0 > p ? p + s : p - s), -1 !== l.indexOf("_cw") && 0 > p ? p = (p + 3599999999640) % s - (0 | p / s) * s : -1 !== l.indexOf("ccw") && 0 < p && (p = (p - 3599999999640) % s - (0 | p / s) * s)), t + p)) && -1e-6 < c && (c = 0), c
		}

		function T(a, o, e) {
			return 0 | 255 * (1 > 6 * (a = 0 > a ? a + 1 : 1 < a ? a - 1 : a) ? o + 6 * (e - o) * a : .5 > a ? e : 2 > 3 * a ? o + 6 * (e - o) * (2 / 3 - a) : o) + .5
		}

		function P(a) {
			var l, d, p, c, m, u;
			return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), Le[a] ? Le[a] : "#" === a.charAt(0) ? (4 === a.length && (a = "#" + (l = a.charAt(1)) + l + (d = a.charAt(2)) + d + (p = a.charAt(3)) + p), [(a = parseInt(a.substr(1), 16)) >> 16, 255 & a >> 8, 255 & a]) : ("hsl" === a.substr(0, 3) ? (a = a.match(Ce), c = +a[0] % 360 / 360, m = +a[1] / 100, l = 2 * (u = +a[2] / 100) - (d = .5 >= u ? u * (1 + m) : u + m - u * m), 3 < a.length && (a[3] = +a[3]), a[0] = T(c + 1 / 3, l, d), a[1] = T(c, l, d), a[2] = T(c - 1 / 3, l, d)) : ((a = a.match(Ce) || Le.transparent)[0] = +a[0], a[1] = +a[1], a[2] = +a[2], 3 < a.length && (a[3] = +a[3])), a)) : Le.black
		}

		function l(i, t, n, r) {
			if (null == i) return function(e) {
				return e
			};
			var e, o = t ? (i.match(Ve) || [""])[0] : "",
				l = i.split(o).join("").match(E) || [],
				m = i.substr(0, i.indexOf(l[0])),
				c = ")" === i.charAt(i.length - 1) ? ")" : "",
				u = -1 === i.indexOf(" ") ? "," : " ",
				p = l.length,
				d = 0 < p ? l[0].replace(Ce, "") : "";
			return p ? e = t ? function(a) {
				var g, _, f, h;
				if ("number" == typeof a) a += d;
				else if (r && X.test(a)) {
					for (h = a.replace(X, "|").split("|"), f = 0; h.length > f; f++) h[f] = e(h[f]);
					return h.join(",")
				}
				if (g = (a.match(Ve) || [o])[0], f = (_ = a.split(g).join("").match(E) || []).length, p > f--)
					for (; p > ++f;) _[f] = n ? _[0 | (f - 1) / 2] : l[f];
				return m + _.join(u) + u + g + c + (-1 === a.indexOf("inset") ? "" : " inset")
			} : function(a) {
				var o, g, _;
				if ("number" == typeof a) a += d;
				else if (r && X.test(a)) {
					for (g = a.replace(X, "|").split("|"), _ = 0; g.length > _; _++) g[_] = e(g[_]);
					return g.join(",")
				}
				if (_ = (o = a.match(E) || []).length, p > _--)
					for (; p > ++_;) o[_] = n ? o[0 | (_ - 1) / 2] : l[_];
				return m + o.join(u) + c
			} : function(e) {
				return e
			}
		}

		function w(e) {
			return e = e.split(","),
			function(d, t, p, i, s, n, r) {
				var c, m = (t + "").split(" ");
				for (r = {}, c = 0; 4 > c; c++) r[e[c]] = m[c] = m[c] || m[(c - 1) / 2 >> 0];
				return i.parse(d, r, s, n)
			}
		}

		function k(a, t) {
			t = t || {}, this.p = t.prefix && oe(a) || a, J[a] = J[this.p] = this, this.format = t.formatter || l(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
		}

		function S(e) {
			if (!J[e]) {
				var d = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
				Ue(e, {
					parser: function(l, t, e, i, s, n, r) {
						var o = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[d];
						return o ? (o._cssRegister(), J[e].parse(l, t, e, i, s, n, r)) : (ae("Error: " + d + " js file not loaded."), s)
					}
				})
			}
		}

		function ie(o) {
			var t, k, P = this.data,
				s = -P.rotation * Se,
				n = s + P.skewX * Se,
				r = (0 | Math.cos(s) * P.scaleX * 100000) / 100000,
				a = (0 | Math.sin(s) * P.scaleX * 100000) / 100000,
				S = (0 | Math.sin(n) * -P.scaleY * 100000) / 100000,
				D = (0 | Math.cos(n) * P.scaleY * 100000) / 100000,
				c = this.t.style,
				u = this.t.currentStyle;
			if (u) {
				k = a, a = -S, S = -k, t = u.filter, c.filter = "";
				var p, A, R = this.t.offsetWidth,
					m = this.t.offsetHeight,
					_ = "absolute" !== u.position,
					g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + a + ", M21=" + S + ", M22=" + D,
					O = P.x + R * P.xPercent / 100,
					I = P.y + m * P.yPercent / 100;
				if (null != P.ox && (O += (p = (P.oxp ? .01 * R * P.ox : P.ox) - R / 2) - (p * r + (A = (P.oyp ? .01 * m * P.oy : P.oy) - m / 2) * a), I += A - (p * S + A * D)), g += _ ? ", Dx=" + ((p = R / 2) - (p * r + (A = m / 2) * a) + O) + ", Dy=" + (A - (p * S + A * D) + I) + ")" : ", sizingMethod='auto expand')", c.filter = -1 === t.indexOf("DXImageTransform.Microsoft.Matrix(") ? g + " " + t : t.replace(Y, g), 0 !== o && 1 !== o || 1 != r || 0 !== a || 0 !== S || 1 != D || _ && -1 === g.indexOf("Dx=0, Dy=0") || N.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter"), !_) {
					var E, z, L, V = 8 > ye ? 1 : -1;
					for (p = P.ieOffsetX || 0, A = P.ieOffsetY || 0, P.ieOffsetX = Math.round((R - ((0 > r ? -r : r) * R + (0 > a ? -a : a) * m)) / 2 + O), P.ieOffsetY = Math.round((m - ((0 > D ? -D : D) * m + (0 > S ? -S : S) * R)) / 2 + I), Ye = 0; 4 > Ye; Ye++) L = (k = -1 === (E = u[z = ze[Ye]]).indexOf("px") ? Oe(this.t, z, parseFloat(E), E.replace(ke, "")) || 0 : parseFloat(E)) === P[z] ? 2 > Ye ? p - P.ieOffsetX : A - P.ieOffsetY : 2 > Ye ? -P.ieOffsetX : -P.ieOffsetY, c[z] = (P[z] = Math.round(k - L * (0 === Ye || 2 === Ye ? 1 : V))) + "px"
				}
			}
		}

		function ne(a) {
			var t, o = this.t,
				i = o.filter || Re(this.data, "filter"),
				r = 0 | this.s + this.c * a;
			100 == r && (t = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (o.removeAttribute("filter"), !Re(this.data, "filter")) : (o.filter = i.replace(c, ""), !0)), t || (this.xn1 && (o.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 == r && this.xn1 || (o.filter = i + " alpha(opacity=" + r + ")") : o.filter = i.replace(N, "opacity=" + r))
		}

		function re(a, t) {
			t && (a.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)), a.removeProperty(t.replace(h, "-$1").toLowerCase())) : a.removeAttribute(t))
		}

		function se(a) {
			if (this.t._gsClassPT = this, 1 === a || 0 === a) {
				this.t.setAttribute("class", 0 === a ? this.b : this.e);
				for (var t = this.data, o = this.t.style; t;) t.v ? o[t.p] = t.v : re(o, t.p), t = t._next;
				1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
			} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
		}

		function le(a) {
			if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
				var t, l, d, p, c = this.t.style,
					r = J.transform.parse;
				if ("all" === this.e) p = !(c.cssText = "");
				else
					for (d = (t = this.e.split(",")).length; - 1 < --d;) l = t[d], J[l] && (J[l].parse === r ? p = !0 : l = "transformOrigin" === l ? He : J[l].p), re(c, l);
				p && (re(c, je), this.t._gsTransform && delete this.t._gsTransform)
			}
		}

		function de() {
			this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
		}
		var pe, ce, me, ue, ge = function() {
				ee.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = ge.prototype.setRatio
			}, J = {}, m = ge.prototype = new ee("css");
		(m.constructor = ge).version = "1.13.1", ge.API = 2, ge.defaultTransformPerspective = 0, ge.defaultSkewType = "compensated", m = "px", ge.suffixMap = {
				top: m,
				right: m,
				bottom: m,
				left: m,
				width: m,
				height: m,
				fontSize: m,
				padding: m,
				margin: m,
				perspective: m,
				lineHeight: ""
		};
		var _e, fe, he, be, ve, ye, Te, xe, we, Ce = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			E = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
			z = /[^\d\-\.]/g,
			ke = /(?:\d|\-|\+|=|#|\.)*/g,
			N = /opacity *= *([^)]*)/i,
			F = /opacity:([^;]*)/i,
			c = /alpha\(opacity *=.+?\)/i,
			L = /^(rgb|hsl)/,
			h = /([A-Z])/g,
			u = /-([a-z])/gi,
			V = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
			U = /(?:Left|Right|Width)/i,
			Pe = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			Y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			X = /,(?=[^\)]*(?:\(|$))/gi,
			Se = Math.PI / 180,
			De = 180 / Math.PI,
			j = {}, B = document,
			W = B.createElement("div"),
			Q = B.createElement("img"),
			q = ge._internals = {
				_specialProps: J
			}, n = navigator.userAgent,
			Z = (xe = n.indexOf("Android"), we = B.createElement("div"), he = -1 !== n.indexOf("Safari") && -1 === n.indexOf("Chrome") && (-1 === xe || 3 < +n.substr(xe + 8, 1)), ve = he && 6 > +n.substr(n.indexOf("Version/") + 8, 1), be = -1 !== n.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(n) && (ye = parseFloat(RegExp.$1)), we.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !! (Te = we.getElementsByTagName("a")[0]) && /^0.55/.test(Te.style.opacity)),
			G = "",
			$e = "",
			Ae = B.defaultView ? B.defaultView.getComputedStyle : function() {}, Re = ge.getStyle = function(a, t, e, l, s) {
				var n;
				return Z || "opacity" !== t ? (!l && a.style[t] ? n = a.style[t] : (e = e || Ae(a)) ? n = e[t] || e.getPropertyValue(t) || e.getPropertyValue(t.replace(h, "-$1").toLowerCase()) : a.currentStyle && (n = a.currentStyle[t]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : o(a)
			}, Oe = q.convertToPixels = function(d, t, e, p, s) {
				if ("px" === p || !p) return e;
				if ("auto" === p || !e) return 0;
				var n, m, g, _ = U.test(t),
					l = d,
					f = W.style,
					c = 0 > e;
				if (c && (e = -e), "%" === p && -1 !== t.indexOf("border")) n = e / 100 * (_ ? d.clientWidth : d.clientHeight);
				else {
					if (f.cssText = "border:0 solid red;position:" + Re(d, "position") + ";line-height:0;", "%" !== p && l.appendChild) f[_ ? "borderLeftWidth" : "borderTopWidth"] = e + p;
					else {
						if (m = (l = d.parentNode || B.body)._gsCache, g = te.ticker.frame, m && _ && m.time === g) return m.width * e / 100;
						f[_ ? "width" : "height"] = e + p
					}
					l.appendChild(W), n = parseFloat(W[_ ? "offsetWidth" : "offsetHeight"]), l.removeChild(W), _ && "%" === p && !1 !== ge.cacheWidths && ((m = l._gsCache = l._gsCache || {}).time = g, m.width = 100 * (n / e)), 0 !== n || s || (n = Oe(d, t, e, p, !0))
				}
				return c ? -n : n
			}, Ie = q.calculateOffset = function(a, t, e) {
				if ("absolute" !== Re(a, "position", e)) return 0;
				var o = "left" === t ? "Left" : "Top",
					i = Re(a, "margin" + o, e);
				return a["offset" + o] - (Oe(a, t, parseFloat(i), i.replace(ke, "")) || 0)
			}, Ee = {
				width: ["Left", "Right"],
				height: ["Top", "Bottom"]
			}, ze = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
			Le = {
				aqua: [0, 255, 255],
				lime: [0, 255, 0],
				silver: [192, 192, 192],
				black: [0, 0, 0],
				maroon: [128, 0, 0],
				teal: [0, 128, 128],
				blue: [0, 0, 255],
				navy: [0, 0, 128],
				white: [255, 255, 255],
				fuchsia: [255, 0, 255],
				olive: [128, 128, 0],
				yellow: [255, 255, 0],
				orange: [255, 165, 0],
				gray: [128, 128, 128],
				purple: [128, 0, 128],
				green: [0, 128, 0],
				red: [255, 0, 0],
				pink: [255, 192, 203],
				cyan: [0, 255, 255],
				transparent: [255, 255, 255, 0]
			}, Ve = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
		for (m in Le) Ve += "|" + m + "\\b";
		Ve = RegExp(Ve + ")", "gi");
		var Fe = (q._setPluginRatio = function(l) {
			this.plugin.setRatio(l);
			for (var t, d, p, c, m = this.data, r = m.proxy, o = m.firstMPT; o;) t = r[o.v], o.r ? t = Math.round(t) : 1e-6 > t && -1e-6 < t && (t = 0), o.t[o.p] = t, o = o._next;
			if (m.autoRotate && (m.autoRotate.rotation = r.rotation), 1 === l)
				for (o = m.firstMPT; o;) {
					if (!(d = o.t).type) d.e = d.s + d.xs0;
					else if (1 === d.type) {
						for (c = d.xs0 + d.s + d.xs1, p = 1; d.l > p; p++) c += d["xn" + p] + d["xs" + (p + 1)];
						d.e = c
					}
					o = o._next
				}
		}, function(a, t, e, o, i) {
			this.t = a, this.p = t, this.v = e, this.r = i, o && ((o._prev = this)._next = o)
		}),
			Ne = (q._parseToProxy = function(g, t, e, i, _, n) {
				var r, b, v, y, T, x = i,
					u = {}, p = {}, d = e._transform,
					f = j;
				for (e._transform = null, j = t, i = T = e.parse(g, t, i, _), j = f, n && (e._transform = d, x && (x._prev = null, x._prev && (x._prev._next = null))); i && i !== x;) {
					if (1 >= i.type && (p[b = i.p] = i.s + i.c, u[b] = i.s, n || (y = new Fe(i, "s", b, y, i.r), i.c = 0), 1 === i.type))
						for (r = i.l; 0 < --r;) v = "xn" + r, p[b = i.p + "_" + v] = i.data[v], u[b] = i[v], n || (y = new Fe(i, v, b, y, i.rxp[v]));
					i = i._next
				}
				return {
					proxy: u,
					end: p,
					firstMPT: y,
					pt: T
				}
			}, q.CSSPropTween = function(d, t, e, i, s, n, r, o, a, l, p) {
				this.t = d, this.p = t, this.s = e, this.c = i, this.n = r || t, d instanceof Ne || ue.push(this.n), this.r = o, this.type = n || 0, a && (this.pr = a, pe = !0), this.b = void 0 === l ? e : l, this.e = void 0 === p ? e + i : p, s && ((this._next = s)._prev = this)
			}),
			Me = ge.parseComplex = function(S, t, e, D, A, n, r, R, I, l) {
				r = new Ne(S, t, 0, 0, r, l ? 2 : 1, null, !1, R, e = e || n || "", D), D += "";
				var h, E, z, V, F, N, M, Y, U, j, B, H, W = e.split(", ").join(",").split(" "),
					q = D.split(", ").join(",").split(" "),
					G = W.length,
					Q = !1 !== _e;
				for (-1 === D.indexOf(",") && -1 === e.indexOf(",") || (W = W.join(" ").replace(X, ", ").split(" "), q = q.join(" ").replace(X, ", ").split(" "), G = W.length), G !== q.length && (G = (W = (n || "").split(" ")).length), r.plugin = I, r.setRatio = l, h = 0; h < G; h++)
					if (V = W[h], F = q[h], (Y = parseFloat(V)) || 0 === Y) r.appendXtra("", Y, a(F, Y), F.replace(O, ""), Q && -1 !== F.indexOf("px"), !0);
					else if (A && ("#" === V.charAt(0) || Le[V] || L.test(V))) H = "," === F.charAt(F.length - 1) ? ")," : ")", V = P(V), F = P(F), (U = 6 < V.length + F.length) && !Z && 0 === F[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(q[h]).join("transparent")) : (Z || (U = !1), r.appendXtra(U ? "rgba(" : "rgb(", V[0], F[0] - V[0], ",", !0, !0).appendXtra("", V[1], F[1] - V[1], ",", !0).appendXtra("", V[2], F[2] - V[2], U ? "," : H, !0), U && (V = 4 > V.length ? 1 : V[3], r.appendXtra("", V, (4 > F.length ? 1 : F[3]) - V, H, !1)));
				else if (N = V.match(Ce)) {
					if (!(M = F.match(O)) || M.length !== N.length) return r;
					for (E = z = 0; N.length > E; E++) B = N[E], j = V.indexOf(B, z), r.appendXtra(V.substr(z, j - z), +B, a(M[E], B), "", Q && "px" === V.substr(j + B.length, 2), 0 === E), z = j + B.length;
					r["xs" + r.l] += V.substr(z)
				} else r["xs" + r.l] += r.l ? " " + V : V; if (-1 !== D.indexOf("=") && r.data) {
					for (H = r.xs0 + r.data.s, h = 1; r.l > h; h++) H += r["xs" + h] + r.data["xn" + h];
					r.e = H + r["xs" + h]
				}
				return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
			}, Ye = 9;
		for ((m = Ne.prototype).l = m.pr = 0; 0 < --Ye;) m["xn" + Ye] = 0, m["xs" + Ye] = "";
		m.xs0 = "", m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null, m.appendXtra = function(l, t, e, i, s, n) {
			var r = this,
				o = r.l;
			return r["xs" + o] += n && o ? " " + l : l || "", e || 0 === o || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = i || "", 0 < o ? (r.data["xn" + o] = t + e, r.rxp["xn" + o] = s, r["xn" + o] = t, r.plugin || (r.xfirst = new Ne(r, "xn" + o, t, e, r.xfirst || r, 0, r.n, s, r.pr), r.xfirst.xs0 = 0)) : (r.data = {
				s: t + e
			}, r.rxp = {}, r.s = t, r.c = e, r.r = s)) : r["xs" + o] += t + (i || ""), r
		};
		var Ue = q._registerComplexSpecialProp = function(a, t, o) {
			"object" != typeof t && (t = {
				parser: o
			});
			var l, d = a.split(","),
				n = t.defaultValue;
			for (o = o || [n], l = 0; d.length > l; l++) t.prefix = 0 === l && t.prefix, t.defaultValue = o[l] || n, new k(d[l], t)
		};
		(m = k.prototype).parseComplex = function(d, t, p, m, s, n) {
			var r, g, _, f, b, v = this.keyword;
			if (this.multi && (X.test(p) || X.test(t) ? (g = t.replace(X, "|").split("|"), _ = p.replace(X, "|").split("|")) : v && (g = [t], _ = [p])), _) {
				for (f = _.length > g.length ? _.length : g.length, r = 0; r < f; r++) t = g[r] = g[r] || this.dflt, p = _[r] = _[r] || this.dflt, v && t.indexOf(v) !== (b = p.indexOf(v)) && ((p = -1 === b ? _ : g)[r] += " " + v);
				t = g.join(", "), p = _.join(", ")
			}
			return Me(d, this.p, t, p, this.clrs, this.dflt, m, this.pr, s, n)
		}, m.parse = function(a, t, e, o, i, n) {
			return this.parseComplex(a.style, this.format(Re(a, this.p, me, !1, this.dflt)), this.format(t), i, n)
		}, ge.registerSpecialProp = function(e, d, a) {
			Ue(e, {
				parser: function(l, t, e, i, s, n) {
					var r = new Ne(l, e, 0, 0, s, 2, e, !1, a);
					return r.plugin = n, r.setRatio = d(l, t, i._tween, e), r
				},
				priority: a
			})
		};
		var Xe = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
			je = oe("transform"),
			Be = G + "transform",
			He = oe("transformOrigin"),
			We = null !== oe("perspective"),
			qe = q.Transform = function() {
				this.skewY = 0
			}, Ge = q.getTransform = function(y, t, e, i) {
				if (y._gsTransform && e && !i) return y._gsTransform;
				var s, J, ee, te, ae, oe, ie, ne, re, se, le, de, pe, ce = e && y._gsTransform || new qe,
					me = 0 > ce.scaleX,
					v = 2e-5,
					b = 179.99,
					w = b * Se,
					T = We && (parseFloat(Re(y, He, t, !1, "0 0 0").split(" ")[2]) || ce.zOrigin) || 0;
				if (je ? s = Re(y, Be, t, !0) : y.currentStyle && (s = (s = y.currentStyle.filter.match(Pe)) && 4 === s.length ? [s[0].substr(4), +s[2].substr(4), +s[1].substr(4), s[3].substr(4), ce.x || 0, ce.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
					for (ee = (J = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; - 1 < --ee;) te = +J[ee], J[ee] = (ae = te - (te |= 0)) ? (0 | ae * 100000 + (0 > ae ? -.5 : .5)) / 100000 + te : te;
					if (16 === J.length) {
						var x = J[8],
							ue = J[9],
							_e = J[10],
							fe = J[12],
							he = J[13],
							be = J[14];
						if (ce.zOrigin && (fe = x * (be = -ce.zOrigin) - J[12], he = ue * be - J[13], be = _e * be + ce.zOrigin - J[14]), !e || i || null == ce.rotationX) {
							var ve, ye, Te, xe, we, Ce, ke, $e = J[0],
								Ae = J[1],
								Oe = J[2],
								Ie = J[3],
								j = J[4],
								Ee = J[5],
								ze = J[6],
								Le = J[7],
								X = J[11],
								Ve = Math.atan2(ze, _e),
								Fe = Ve < -w || w < Ve;
							ce.rotationX = Ve * De, Ve && (ve = j * (xe = Math.cos(-Ve)) + x * (we = Math.sin(-Ve)), ye = Ee * xe + ue * we, Te = ze * xe + _e * we, x = j * -we + x * xe, ue = Ee * -we + ue * xe, _e = ze * -we + _e * xe, X = Le * -we + X * xe, j = ve, Ee = ye, ze = Te), Ve = Math.atan2(x, $e), ce.rotationY = Ve * De, Ve && (Ce = Ve < -w || w < Ve, ye = Ae * (xe = Math.cos(-Ve)) - ue * (we = Math.sin(-Ve)), Te = Oe * xe - _e * we, ue = Ae * we + ue * xe, _e = Oe * we + _e * xe, X = Ie * we + X * xe, $e = ve = $e * xe - x * we, Ae = ye, Oe = Te), Ve = Math.atan2(Ae, Ee), ce.rotation = Ve * De, Ve && (ke = Ve < -w || w < Ve, $e = $e * (xe = Math.cos(-Ve)) + j * (we = Math.sin(-Ve)), ye = Ae * xe + Ee * we, Ee = Ae * -we + Ee * xe, ze = Oe * -we + ze * xe, Ae = ye), ke && Fe ? ce.rotation = ce.rotationX = 0 : ke && Ce ? ce.rotation = ce.rotationY = 0 : Ce && Fe && (ce.rotationY = ce.rotationX = 0), ce.scaleX = (0 | Math.sqrt($e * $e + Ae * Ae) * 100000 + .5) / 100000, ce.scaleY = (0 | Math.sqrt(Ee * Ee + ue * ue) * 100000 + .5) / 100000, ce.scaleZ = (0 | Math.sqrt(ze * ze + _e * _e) * 100000 + .5) / 100000, ce.skewX = 0, ce.perspective = X ? 1 / (0 > X ? -X : X) : 0, ce.x = fe, ce.y = he, ce.z = be
						}
					} else if (!(We && !i && J.length && ce.x === J[4] && ce.y === J[5] && (ce.rotationX || ce.rotationY) || void 0 !== ce.x && "none" === Re(y, "display", t))) {
						var W = 6 <= J.length,
							Q = W ? J[0] : 1,
							q = J[1] || 0,
							Z = J[2] || 0,
							G = W ? J[3] : 1;
						ce.x = J[4] || 0, ce.y = J[5] || 0, oe = Math.sqrt(Q * Q + q * q), ie = Math.sqrt(G * G + Z * Z), ne = Q || q ? Math.atan2(q, Q) * De : ce.rotation || 0, re = Z || G ? Math.atan2(Z, G) * De + ne : ce.skewX || 0, se = oe - Math.abs(ce.scaleX || 0), le = ie - Math.abs(ce.scaleY || 0), 90 < Math.abs(re) && 270 > Math.abs(re) && (me ? (oe *= -1, re += 0 >= ne ? 180 : -180, ne += 0 >= ne ? 180 : -180) : (ie *= -1, re += 0 >= re ? 180 : -180)), de = (ne - ce.rotation) % 180, pe = (re - ce.skewX) % 180, (void 0 === ce.skewX || v < se || se < -v || v < le || le < -v || -b < de && de < b && !1 | de * 100000 || -b < pe && pe < b && !1 | pe * 100000) && (ce.scaleX = oe, ce.scaleY = ie, ce.rotation = ne, ce.skewX = re), We && (ce.rotationX = ce.rotationY = ce.z = 0, ce.perspective = parseFloat(ge.defaultTransformPerspective) || 0, ce.scaleZ = 1)
					}
					for (ee in ce.zOrigin = T, ce) v > ce[ee] && ce[ee] > -v && (ce[ee] = 0)
				} else ce = {
					x: 0,
					y: 0,
					z: 0,
					scaleX: 1,
					scaleY: 1,
					scaleZ: 1,
					skewX: 0,
					perspective: 0,
					rotation: 0,
					rotationX: 0,
					rotationY: 0,
					zOrigin: 0
				};
				return e && (y._gsTransform = ce), ce.xPercent = ce.yPercent = 0, ce
			}, Ze = q.set3DTransformRatio = function(E) {
				var t, z, L, V, F, N, M, Y, U, X, j, B, H, W, q, G, Z, Q, K, J, ee, te, ae, oe = this.data,
					C = this.t.style,
					k = oe.rotation * Se,
					ie = oe.scaleX,
					ne = oe.scaleY,
					re = oe.scaleZ,
					se = oe.x,
					A = oe.y,
					I = oe.z,
					R = oe.perspective;
				if (1 !== E && 0 !== E || "auto" !== oe.force3D || oe.rotationY || oe.rotationX || 1 !== re || R || I) {
					if (be && (1e-4 > ie && -1e-4 < ie && (ie = re = 2e-5), 1e-4 > ne && -1e-4 < ne && (ne = re = 2e-5), !R || oe.z || oe.rotationX || oe.rotationY || (R = 0)), k || oe.skewX) t = Q = Math.cos(k), F = K = Math.sin(k), oe.skewX && (k -= oe.skewX * Se, Q = Math.cos(k), K = Math.sin(k), "simple" === oe.skewType && (J = Math.tan(oe.skewX * Se), Q *= J = Math.sqrt(1 + J * J), K *= J)), z = -K, N = Q;
					else {
						if (!(oe.rotationY || oe.rotationX || 1 !== re || R)) return void(C[je] = (oe.xPercent || oe.yPercent ? "translate(" + oe.xPercent + "%," + oe.yPercent + "%) translate3d(" : "translate3d(") + se + "px," + A + "px," + I + "px)" + (1 !== ie || 1 !== ne ? " scale(" + ie + "," + ne + ")" : ""));
						t = N = 1, z = F = 0
					}
					j = 1, L = V = M = Y = U = X = B = H = W = 0, q = R ? -1 / R : 0, G = oe.zOrigin, Z = 1e5, (k = oe.rotationY * Se) && (Q = Math.cos(k), U = j * -(K = Math.sin(k)), H = q * -K, L = t * K, M = F * K, j *= Q, q *= Q, t *= Q, F *= Q), (k = oe.rotationX * Se) && (J = z * (Q = Math.cos(k)) + L * (K = Math.sin(k)), ee = N * Q + M * K, te = X * Q + j * K, ae = W * Q + q * K, L = z * -K + L * Q, M = N * -K + M * Q, j = X * -K + j * Q, q = W * -K + q * Q, z = J, N = ee, X = te, W = ae), 1 !== re && (L *= re, M *= re, j *= re, q *= re), 1 !== ne && (z *= ne, N *= ne, X *= ne, W *= ne), 1 !== ie && (t *= ie, F *= ie, U *= ie, H *= ie), G && (V = L * (B -= G), Y = M * B, B = j * B + G), V = (J = (V += se) - (V |= 0)) ? (0 | J * Z + (0 > J ? -.5 : .5)) / Z + V : V, Y = (J = (Y += A) - (Y |= 0)) ? (0 | J * Z + (0 > J ? -.5 : .5)) / Z + Y : Y, B = (J = (B += I) - (B |= 0)) ? (0 | J * Z + (0 > J ? -.5 : .5)) / Z + B : B, C[je] = (oe.xPercent || oe.yPercent ? "translate(" + oe.xPercent + "%," + oe.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | t * Z) / Z, (0 | F * Z) / Z, (0 | U * Z) / Z, (0 | H * Z) / Z, (0 | z * Z) / Z, (0 | N * Z) / Z, (0 | X * Z) / Z, (0 | W * Z) / Z, (0 | L * Z) / Z, (0 | M * Z) / Z, (0 | j * Z) / Z, (0 | q * Z) / Z, V, Y, B, R ? 1 + -B / R : 1].join(",") + ")"
				} else Qe.call(this, E)
			}, Qe = q.set2DTransformRatio = function(d) {
				var t, p, c, m, u = this.data,
					r = this.t.style,
					o = u.x,
					a = u.y;
				return u.rotationX || u.rotationY || u.z || !0 === u.force3D || "auto" === u.force3D && 1 !== d && 0 !== d ? void(this.setRatio = Ze).call(this, d) : void(u.rotation || u.skewX ? (p = (t = u.rotation * Se) - u.skewX * Se, c = 1e5 * u.scaleX, m = 1e5 * u.scaleY, r[je] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(t) * c) / 1e5 + "," + (0 | Math.sin(t) * c) / 1e5 + "," + (0 | Math.sin(p) * -m) / 1e5 + "," + (0 | Math.cos(p) * m) / 1e5 + "," + o + "," + a + ")") : r[je] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + u.scaleX + ",0,0," + u.scaleY + "," + o + "," + a + ")")
			};
		for (Ue("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
			parser: function(T, t, e, x, s, w, r) {
				if (x._transform) return s;
				var o, C, k, P, S, D, A, R = x._transform = Ge(T, me, !0, r.parseTransform),
					f = T.style,
					m = Xe.length,
					O = r,
					g = {};
				if ("string" == typeof O.transform && je)(k = W.style)[je] = O.transform, k.display = "block", k.position = "absolute", B.body.appendChild(W), o = Ge(W, null, !1), B.body.removeChild(W);
				else if ("object" == typeof O) {
					if (o = {
						scaleX: p(null == O.scaleX ? O.scale : O.scaleX, R.scaleX),
						scaleY: p(null == O.scaleY ? O.scale : O.scaleY, R.scaleY),
						scaleZ: p(O.scaleZ, R.scaleZ),
						x: p(O.x, R.x),
						y: p(O.y, R.y),
						z: p(O.z, R.z),
						xPercent: p(O.xPercent, R.xPercent),
						yPercent: p(O.yPercent, R.yPercent),
						perspective: p(O.transformPerspective, R.perspective)
					}, null != (A = O.directionalRotation))
						if ("object" == typeof A)
							for (k in A) O[k] = A[k];
						else O.rotation = A;
						"string" == typeof O.x && -1 !== O.x.indexOf("%") && (o.x = 0, o.xPercent = p(O.x, R.xPercent)), "string" == typeof O.y && -1 !== O.y.indexOf("%") && (o.y = 0, o.yPercent = p(O.y, R.yPercent)), o.rotation = y(("rotation" in O) ? O.rotation : ("shortRotation" in O) ? O.shortRotation + "_short" : ("rotationZ" in O) ? O.rotationZ : R.rotation, R.rotation, "rotation", g), We && (o.rotationX = y(("rotationX" in O) ? O.rotationX : ("shortRotationX" in O) ? O.shortRotationX + "_short" : R.rotationX || 0, R.rotationX, "rotationX", g), o.rotationY = y(("rotationY" in O) ? O.rotationY : ("shortRotationY" in O) ? O.shortRotationY + "_short" : R.rotationY || 0, R.rotationY, "rotationY", g)), o.skewX = null == O.skewX ? R.skewX : y(O.skewX, R.skewX), o.skewY = null == O.skewY ? R.skewY : y(O.skewY, R.skewY), (C = o.skewY - R.skewY) && (o.skewX += C, o.rotation += C)
				}
				for (We && null != O.force3D && (R.force3D = O.force3D, D = !0), R.skewType = O.skewType || R.skewType || ge.defaultSkewType, (S = R.force3D || R.z || R.rotationX || R.rotationY || o.z || o.rotationX || o.rotationY || o.perspective) || null == O.scale || (o.scaleZ = 1); - 1 < --m;)(1e-6 < (P = o[e = Xe[m]] - R[e]) || -1e-6 > P || null != j[e]) && (D = !0, s = new Ne(R, e, R[e], P, s), (e in g) && (s.e = g[e]), s.xs0 = 0, s.plugin = w, x._overwriteProps.push(s.n));
				return ((P = O.transformOrigin) || We && S && R.zOrigin) && (je ? (D = !0, e = He, P = (P || Re(T, e, me, !1, "50% 50%")) + "", (s = new Ne(f, e, 0, 0, s, -1, "transformOrigin")).b = f[e], s.plugin = w, We ? (k = R.zOrigin, P = P.split(" "), R.zOrigin = (2 < P.length && (0 === k || "0px" !== P[2]) ? parseFloat(P[2]) : k) || 0, s.xs0 = s.e = P[0] + " " + (P[1] || "50%") + " 0px", (s = new Ne(R, "zOrigin", 0, 0, s, -1, s.n)).b = k, s.xs0 = s.e = R.zOrigin) : s.xs0 = s.e = P) : b(P + "", R)), D && (x._transformType = S || 3 === this._transformType ? 3 : 2), s
			},
			prefix: !0
		}), Ue("boxShadow", {
			defaultValue: "0px 0px 0px 0px #999",
			prefix: !0,
			color: !0,
			multi: !0,
			keyword: "inset"
		}), Ue("borderRadius", {
			defaultValue: "0px",
			parser: function(x, t, C, i, s) {
				t = this.format(t);
				var k, P, S, D, A, R, O, I, E, z, L, V, F, N, M, Y, U = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
					w = x.style;
				for (E = parseFloat(x.offsetWidth), z = parseFloat(x.offsetHeight), k = t.split(" "), P = 0; U.length > P; P++) this.p.indexOf("border") && (U[P] = oe(U[P])), -1 !== (A = D = Re(x, U[P], me, !1, "0px")).indexOf(" ") && (A = (D = A.split(" "))[0], D = D[1]), R = S = k[P], O = parseFloat(A), V = A.substr((O + "").length), "" === (L = (F = "=" === R.charAt(1)) ? (I = parseInt(R.charAt(0) + "1", 10), R = R.substr(2), I *= parseFloat(R), R.substr((I + "").length - (0 > I ? 1 : 0)) || "") : (I = parseFloat(R), R.substr((I + "").length))) && (L = ce[C] || V), L !== V && (N = Oe(x, "borderLeft", O, V), M = Oe(x, "borderTop", O, V), D = "%" === L ? (A = 100 * (N / E) + "%", 100 * (M / z) + "%") : "em" === L ? (A = N / (Y = Oe(x, "borderLeft", 1, "em")) + "em", M / Y + "em") : (A = N + "px", M + "px"), F && (R = parseFloat(A) + I + L, S = parseFloat(D) + I + L)), s = Me(w, U[P], A + " " + D, R + " " + S, !1, "0px", s);
				return s
			},
			prefix: !0,
			formatter: l("0px 0px 0px 0px", !1, !0)
		}), Ue("backgroundPosition", {
			defaultValue: "0 0",
			parser: function(p, t, e, i, s, n) {
				var r, g, _, b, v, y, T = me || Ae(p, null),
					d = this.format((T ? ye ? T.getPropertyValue("background-position-x") + " " + T.getPropertyValue("background-position-y") : T.getPropertyValue("background-position") : p.currentStyle.backgroundPositionX + " " + p.currentStyle.backgroundPositionY) || "0 0"),
					x = this.format(t);
				if (-1 !== d.indexOf("%") != (-1 !== x.indexOf("%")) && (y = Re(p, "backgroundImage").replace(V, "")) && "none" !== y) {
					for (r = d.split(" "), g = x.split(" "), Q.setAttribute("src", y), _ = 2; - 1 < --_;)(b = -1 !== (d = r[_]).indexOf("%")) != (-1 !== g[_].indexOf("%")) && (v = 0 === _ ? p.offsetWidth - Q.width : p.offsetHeight - Q.height, r[_] = b ? parseFloat(d) / 100 * v + "px" : 100 * (parseFloat(d) / v) + "%");
					d = r.join(" ")
				}
				return this.parseComplex(p.style, d, x, s, n)
			},
			formatter: b
		}), Ue("backgroundSize", {
			defaultValue: "0 0",
			formatter: b
		}), Ue("perspective", {
			defaultValue: "0px",
			prefix: !0
		}), Ue("perspectiveOrigin", {
			defaultValue: "50% 50%",
			prefix: !0
		}), Ue("transformStyle", {
			prefix: !0
		}), Ue("backfaceVisibility", {
			prefix: !0
		}), Ue("userSelect", {
			prefix: !0
		}), Ue("margin", {
			parser: w("marginTop,marginRight,marginBottom,marginLeft")
		}), Ue("padding", {
			parser: w("paddingTop,paddingRight,paddingBottom,paddingLeft")
		}), Ue("clip", {
			defaultValue: "rect(0px,0px,0px,0px)",
			parser: function(d, t, p, i, s, n) {
				var r, c, m;
				return t = 9 > ye ? (c = d.currentStyle, m = 8 > ye ? " " : ",", r = "rect(" + c.clipTop + m + c.clipRight + m + c.clipBottom + m + c.clipLeft + ")", this.format(t).split(",").join(m)) : (r = this.format(Re(d, this.p, me, !1, this.dflt)), this.format(t)), this.parseComplex(d.style, r, t, s, n)
			}
		}), Ue("textShadow", {
			defaultValue: "0px 0px 0px #999",
			color: !0,
			multi: !0
		}), Ue("autoRound,strictUnits", {
			parser: function(a, t, e, o, i) {
				return i
			}
		}), Ue("border", {
			defaultValue: "0px solid #000",
			parser: function(a, t, e, o, i, n) {
				return this.parseComplex(a.style, this.format(Re(a, "borderTopWidth", me, !1, "0px") + " " + Re(a, "borderTopStyle", me, !1, "solid") + " " + Re(a, "borderTopColor", me, !1, "#000")), this.format(t), i, n)
			},
			color: !0,
			formatter: function(a) {
				var t = a.split(" ");
				return t[0] + " " + (t[1] || "solid") + " " + (a.match(Ve) || ["#000"])[0]
			}
		}), Ue("borderWidth", {
			parser: w("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
		}), Ue("float,cssFloat,styleFloat", {
			parser: function(a, t, e, i, s) {
				var n = a.style,
					r = ("cssFloat" in n) ? "cssFloat" : "styleFloat";
				return new Ne(n, r, 0, 0, s, -1, e, !1, 0, n[r], t)
			}
		}), Ue("opacity,alpha,autoAlpha", {
			defaultValue: "1",
			parser: function(d, t, p, i, s, c) {
				var r = parseFloat(Re(d, "opacity", me, !1, "1")),
					m = d.style,
					a = "autoAlpha" === p;
				return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + r), a && 1 === r && "hidden" === Re(d, "visibility", me) && 0 !== t && (r = 0), Z ? s = new Ne(m, "opacity", r, t - r, s) : ((s = new Ne(m, "opacity", 100 * r, 100 * (t - r), s)).xn1 = a ? 1 : 0, m.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = d, s.plugin = c, s.setRatio = ne), a && ((s = new Ne(m, "visibility", 0, 0, s, -1, null, !1, 0, 0 === r ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(s.n), i._overwriteProps.push(p)), s
			}
		}), Ue("className", {
			parser: function(m, t, e, i, s, f, r) {
				var o, b, v, y, T, x = m.getAttribute("class") || "",
					p = m.style.cssText;
				if ((s = i._classNamePT = new Ne(m, e, 0, 0, s, 2)).setRatio = se, s.pr = -11, pe = !0, s.b = x, b = _(m, me), v = m._gsClassPT) {
					for (y = {}, T = v.data; T;) y[T.p] = 1, T = T._next;
					v.setRatio(1)
				}
				return (m._gsClassPT = s).e = "=" === t.charAt(1) ? x.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t, i._tween._duration && (m.setAttribute("class", s.e), o = g(m, b, _(m), r, y), m.setAttribute("class", x), s.data = o.firstMPT, m.style.cssText = p, s = s.xfirst = i.parse(m, o.difs, s, f)), s
			}
		}), (Ue("clearProps", {
			parser: function(a, t, e, o, i) {
				return (i = new Ne(a, e, 0, 0, i, 2)).setRatio = le, i.e = t, i.pr = -10, i.data = o._tween, pe = !0, i
			}
		}), m = ["bezier", "throwProps", "physicsProps", "physics2D"], Ye = m.length); Ye--;) S(m[Ye]);
		(m = ge.prototype)._firstPT = null, m._onInitTween = function(d, t, m) {
			if (!d.nodeType) return !1;
			this._target = d, this._tween = m, this._vars = t, _e = t.autoRound, pe = !1, ce = t.suffixMap || ge.suffixMap, me = Ae(d, ""), ue = this._overwriteProps;
			var i, f, b, v, y, T, x, w, C, k = d.style;
			if (fe && "" === k.zIndex && ("auto" !== (i = Re(d, "zIndex", me)) && "" !== i || this._addLazySet(k, "zIndex", 0)), "string" == typeof t && (v = k.cssText, i = _(d, me), k.cssText = v + ";" + t, i = g(d, i, _(d)).difs, !Z && F.test(t) && (i.opacity = parseFloat(RegExp.$1)), t = i, k.cssText = v), this._firstPT = f = this.parse(d, t, null), this._transformType) {
				for (C = 3 === this._transformType, je ? he && (fe = !0, "" === k.zIndex && ("auto" !== (x = Re(d, "zIndex", me)) && "" !== x || this._addLazySet(k, "zIndex", 0)), ve && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : k.zoom = 1, b = f; b && b._next;) b = b._next;
				w = new Ne(d, "transform", 0, 0, null, 2), this._linkCSSP(w, null, b), w.setRatio = C && We ? Ze : je ? Qe : ie, w.data = this._transform || Ge(d, me, !0), ue.pop()
			}
			if (pe) {
				for (; f;) {
					for (T = f._next, b = v; b && b.pr > f.pr;) b = b._next;
					(f._prev = b ? b._prev : y) ? f._prev._next = f : v = f, (f._next = b) ? b._prev = f : y = f, f = T
				}
				this._firstPT = v
			}
			return !0
		}, m.parse = function(m, t, e, g) {
			var s, _, b, y, T, x, w, C, k, S, D = m.style;
			for (s in t) x = t[s], (_ = J[s]) ? e = _.parse(m, x, s, this, e, g, t) : (T = Re(m, s, me) + "", k = "string" == typeof x, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || k && L.test(x) ? (k || (x = (3 < (x = P(x)).length ? "rgba(" : "rgb(") + x.join(",") + ")"), e = Me(D, s, T, x, !0, "transparent", e, 0, g)) : k && (-1 !== x.indexOf(" ") || -1 !== x.indexOf(",")) ? e = Me(D, s, T, x, !0, null, e, 0, g) : (w = (b = parseFloat(T)) || 0 === b ? T.substr((b + "").length) : "", "" !== T && "auto" !== T || (w = "width" === s || "height" === s ? (b = v(m, s, me), "px") : "left" === s || "top" === s ? (b = Ie(m, s, me), "px") : (b = "opacity" === s ? 1 : 0, "")), "" === (C = (S = k && "=" === x.charAt(1)) ? (y = parseInt(x.charAt(0) + "1", 10), x = x.substr(2), y *= parseFloat(x), x.replace(ke, "")) : (y = parseFloat(x), k && x.substr((y + "").length) || "")) && (C = s in ce ? ce[s] : w), x = y || 0 === y ? (S ? y + b : y) + C : t[s], w !== C && "" !== C && (y || 0 === y) && b && (b = Oe(m, s, b, w), "%" === C ? (b /= Oe(m, s, 100, "%") / 100, !0 !== t.strictUnits && (T = b + "%")) : "em" === C ? b /= Oe(m, s, 1, "em") : "px" !== C && (y = Oe(m, s, y, C), C = "px"), S && (y || 0 === y) && (x = y + b + C)), S && (y += b), (b || 0 === b) && (y || 0 === y) ? (e = new Ne(D, s, b, y - b, e, 0, s, !1 !== _e && ("px" === C || "zIndex" === s), 0, T, x)).xs0 = C : void 0 !== D[s] && (x || "NaN" != x + "" && null != x) ? (e = new Ne(D, s, y || b || 0, 0, e, -1, s, !1, 0, T, x)).xs0 = "none" !== x || "display" !== s && -1 === s.indexOf("Style") ? x : T : ae("invalid " + s + " tween value: " + t[s]))), g && e && !e.plugin && (e.plugin = g);
			return e
		}, m.setRatio = function(a) {
			var t, o, r, l = this._firstPT;
			if (!(1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time))
				for (; l;) 2 === l.type ? l.setRatio(a) : l.t[l.p] = l.e, l = l._next;
			else if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
				for (; l;) {
					if (!(t = l.c * a + l.s, l.r ? t = Math.round(t) : 1e-6 > t && -1e-6 < t && (t = 0), l.type)) l.t[l.p] = t + l.xs0;
					else if (!(1 === l.type)) - 1 === l.type ? l.t[l.p] = l.xs0 : l.setRatio && l.setRatio(a);
					else if (2 === (r = l.l)) l.t[l.p] = l.xs0 + t + l.xs1 + l.xn1 + l.xs2;
					else if (3 === r) l.t[l.p] = l.xs0 + t + l.xs1 + l.xn1 + l.xs2 + l.xn2 + l.xs3;
					else if (4 === r) l.t[l.p] = l.xs0 + t + l.xs1 + l.xn1 + l.xs2 + l.xn2 + l.xs3 + l.xn3 + l.xs4;
					else if (5 === r) l.t[l.p] = l.xs0 + t + l.xs1 + l.xn1 + l.xs2 + l.xn2 + l.xs3 + l.xn3 + l.xs4 + l.xn4 + l.xs5;
					else {
						for (o = l.xs0 + t + l.xs1, r = 1; l.l > r; r++) o += l["xn" + r] + l["xs" + (r + 1)];
						l.t[l.p] = o
					}
					l = l._next
				} else
					for (; l;) 2 === l.type ? l.setRatio(a) : l.t[l.p] = l.b, l = l._next
		}, m._enableTransforms = function(e) {
			this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Ge(this._target, me, !0)
		}, m._addLazySet = function(a, t, e) {
			var o = this._firstPT = new Ne(a, t, 0, 0, this._firstPT, 2);
			o.e = e, o.setRatio = de, o.data = this
		}, m._linkCSSP = function(a, t, e, o) {
			return a && (t && (t._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, o = !0), e ? e._next = a : o || null !== this._firstPT || (this._firstPT = a), a._next = t, a._prev = e), a
		}, m._kill = function(a) {
			var t, o, r, l = a;
			if (a.autoAlpha || a.alpha) {
				for (o in l = {}, a) l[o] = a[o];
				l.opacity = 1, l.autoAlpha && (l.visibility = 1)
			}
			return a.className && (t = this._classNamePT) && ((r = t.xfirst) && r._prev ? this._linkCSSP(r._prev, t._next, r._prev._prev) : r === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, r._prev), this._classNamePT = null), ee.prototype._kill.call(this, l)
		};
		var Ke = function(a, t, e) {
			var i, l, d, p;
			if (a.slice)
				for (l = a.length; - 1 < --l;) Ke(a[l], t, e);
			else
				for (l = (i = a.childNodes).length; - 1 < --l;) p = (d = i[l]).type, d.style && (t.push(_(d)), e && e.push(d)), (1 === p || 9 === p || 11 === p) && d.childNodes.length && Ke(d, t, e)
		};
		return ge.cascadeTo = function(d, p, e) {
			var i, m, _, f = te.to(d, p, e),
				o = [f],
				a = [],
				l = [],
				h = [],
				c = te._internals.reservedProps;
			for (d = f._targets || f.target, Ke(d, a, h), f.render(p, !0), Ke(d, l), f.render(0, !0), f._enabled(!0), i = h.length; - 1 < --i;)
				if ((m = g(h[i], a[i], l[i])).firstMPT) {
					for (_ in m = m.difs, e) c[_] && (m[_] = e[_]);
					o.push(te.to(h[i], p, m))
				}
			return o
		}, ee.activate([ge]), ge
	}, !0), (o = _gsScope._gsDefine.plugin({
		propName: "roundProps",
		priority: -1,
		API: 2,
		init: function(a, t, e) {
			return this._tween = e, !0
		}
	}).prototype)._onInitAllProps = function() {
		for (var l, d, p, c = this._tween, s = c.vars.roundProps instanceof Array ? c.vars.roundProps : c.vars.roundProps.split(","), n = s.length, m = {}, o = c._propLookup.roundProps; - 1 < --n;) m[s[n]] = 1;
		for (n = s.length; - 1 < --n;)
			for (l = s[n], d = c._firstPT; d;) p = d._next, d.pg ? d.t._roundProps(m, !0) : d.n === l && (this._add(d.t, l, d.s, d.c), p && (p._prev = d._prev), d._prev ? d._prev._next = p : c._firstPT === d && (c._firstPT = p), d._next = d._prev = null, c._propLookup[l] = o), d = p;
		return !1
	}, o._add = function(a, t, e, o) {
		this._addTween(a, t, e, e + o, t, !0), this._overwriteProps.push(t)
	}, _gsScope._gsDefine.plugin({
		propName: "attr",
		API: 2,
		version: "0.3.3",
		init: function(a, t) {
			var e, o, r;
			if ("function" != typeof a.setAttribute) return !1;
			for (e in this._target = a, this._proxy = {}, this._start = {}, this._end = {}, t) this._start[e] = this._proxy[e] = o = a.getAttribute(e), r = this._addTween(this._proxy, e, parseFloat(o), t[e], e), this._end[e] = r ? r.s + r.c : t[e], this._overwriteProps.push(e);
			return !0
		},
		set: function(a) {
			this._super.setRatio.call(this, a);
			for (var t, o = this._overwriteProps, i = o.length, r = 1 === a ? this._end : a ? this._proxy : this._start; - 1 < --i;) t = o[i], this._target.setAttribute(t, r[t] + "")
		}
	}), _gsScope._gsDefine.plugin({
		propName: "directionalRotation",
		version: "0.2.1",
		API: 2,
		init: function(l, t) {
			"object" != typeof t && (t = {
				rotation: t
			}), this.finals = {};
			var d, p, c, m, u, g = !0 === t.useRadians ? 2 * Math.PI : 360;
			for (d in t) "useRadians" !== d && (p = (u = (t[d] + "").split("_"))[0], c = parseFloat("function" == typeof l[d] ? l[d.indexOf("set") || "function" != typeof l["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : l[d]), m = (this.finals[d] = "string" == typeof p && "=" === p.charAt(1) ? c + parseInt(p.charAt(0) + "1", 10) * +p.substr(2) : +p || 0) - c, u.length && (-1 !== (p = u.join("_")).indexOf("short") && (m %= g) !== m % (g / 2) && (m = 0 > m ? m + g : m - g), -1 !== p.indexOf("_cw") && 0 > m ? m = (m + 9999999999 * g) % g - (0 | m / g) * g : -1 !== p.indexOf("ccw") && 0 < m && (m = (m - 9999999999 * g) % g - (0 | m / g) * g)), (1e-6 < m || -1e-6 > m) && (this._addTween(l, d, c, c + m, d), this._overwriteProps.push(d)));
			return !0
		},
		set: function(a) {
			var t;
			if (1 !== a) this._super.setRatio.call(this, a);
			else
				for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
		}
	})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(b) {
		function m(a, t) {
			var e = h("easing." + a, function() {}, !0),
				o = e.prototype = new b;
			return o.constructor = e, o.getRatio = t, e
		}

		function t(a, t, e, o) {
			var i = h("easing." + a, {
				easeOut: new t,
				easeIn: new e,
				easeInOut: new o
			}, !0);
			return c(i, a), i
		}

		function _(a, t, e) {
			this.t = a, this.v = t, e && (((this.next = e).prev = this).c = e.v - t, this.gap = e.t - a)
		}

		function e(a, t) {
			var e = h("easing." + a, function(e) {
				this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
			}, !0),
				o = e.prototype = new b;
			return o.constructor = e, o.getRatio = t, o.config = function(a) {
				return new e(a)
			}, e
		}
		var i, g, v, y = _gsScope.GreenSockGlobals || _gsScope,
			o = y.com.greensock,
			a = 2 * Math.PI,
			l = Math.PI / 2,
			h = o._class,
			c = b.register || function() {}, u = t("Back", e("BackOut", function(e) {
				return --e * e * ((this._p1 + 1) * e + this._p1) + 1
			}), e("BackIn", function(e) {
				return e * e * ((this._p1 + 1) * e - this._p1)
			}), e("BackInOut", function(e) {
				return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
			})),
			p = h("easing.SlowMo", function(a, o, n) {
				o = o || 0 === o ? o : .7, null == a ? a = .7 : 1 < a && (a = 1), this._p = 1 === a ? 0 : o, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
			}, !0),
			d = p.prototype = new b;
		return d.constructor = p, d.getRatio = function(a) {
			var o = a + (.5 - a) * this._p;
			return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : o - (a = 1 - a / this._p1) * a * a * a * o : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : o + (a - o) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : o
		}, p.ease = new p(.7, .7), d.config = p.config = function(a, t, e) {
			return new p(a, t, e)
		}, (d = (i = h("easing.SteppedEase", function(e) {
			e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
		}, !0)).prototype = new b).constructor = i, d.getRatio = function(e) {
			return 0 > e ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
		}, d.config = i.config = function(e) {
			return new i(e)
		}, (d = (g = h("easing.RoughEase", function(g) {
			for (var v, y, T, x, w, C, k = (g = g || {}).taper || "none", a = [], l = 0, P = 0 | (g.points || 20), c = P, S = !1 !== g.randomize, p = !0 === g.clamp, d = g.template instanceof b ? g.template : null, f = "number" == typeof g.strength ? .4 * g.strength : .4; - 1 < --c;) v = S ? Math.random() : 1 / P * c, y = d ? d.getRatio(v) : v, T = "none" === k ? f : "out" === k ? (x = 1 - v) * x * f : "in" === k ? v * v * f : .5 * (x = .5 > v ? 2 * v : 2 * (1 - v)) * x * f, S ? y += Math.random() * T - .5 * T : c % 2 ? y += .5 * T : y -= .5 * T, p && (1 < y ? y = 1 : 0 > y && (y = 0)), a[l++] = {
				x: v,
				y: y
			};
			for (a.sort(function(a, t) {
				return a.x - t.x
			}), C = new _(1, 1, null), c = P; - 1 < --c;) w = a[c], C = new _(w.x, w.y, C);
			this._prev = new _(0, 0, 0 === C.t ? C.next : C)
		}, !0)).prototype = new b).constructor = g, d.getRatio = function(a) {
			var t = this._prev;
			if (a > t.t) {
				for (; t.next && a >= t.t;) t = t.next;
				t = t.prev
			} else
				for (; t.prev && t.t >= a;) t = t.prev;
			return (this._prev = t).v + (a - t.t) / t.gap * t.c
		}, d.config = function(e) {
			return new g(e)
		}, g.ease = new g, t("Bounce", m("BounceOut", function(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}), m("BounceIn", function(e) {
			return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}), m("BounceInOut", function(a) {
			var o = .5 > a;
			return a = (a = o ? 1 - 2 * a : 2 * a - 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, o ? .5 * (1 - a) : .5 * a + .5
		})), t("Circ", m("CircOut", function(e) {
			return Math.sqrt(1 - --e * e)
		}), m("CircIn", function(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}), m("CircInOut", function(e) {
			return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		})), t("Elastic", (v = function(o, t, r) {
			var i = h("easing." + o, function(o, t) {
				this._p1 = o || 1, this._p2 = t || r, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
			}, !0),
				e = i.prototype = new b;
			return e.constructor = i, e.getRatio = t, e.config = function(a, t) {
				return new i(a, t)
			}, i
		})("ElasticOut", function(e) {
			return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * a / this._p2) + 1
		}, .3), v("ElasticIn", function(e) {
			return -this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * a / this._p2)
		}, .3), v("ElasticInOut", function(e) {
			return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * a / this._p2) + 1
		}, .45)), t("Expo", m("ExpoOut", function(e) {
			return 1 - Math.pow(2, -10 * e)
		}), m("ExpoIn", function(e) {
			return Math.pow(2, 10 * (e - 1)) - .001
		}), m("ExpoInOut", function(e) {
			return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
		})), t("Sine", m("SineOut", function(e) {
			return Math.sin(e * l)
		}), m("SineIn", function(e) {
			return 1 - Math.cos(e * l)
		}), m("SineInOut", function(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		})), h("easing.EaseLookup", {
			find: function(e) {
				return b.map[e]
			}
		}, !0), c(y.SlowMo, "SlowMo", "ease,"), c(g, "RoughEase", "ease,"), c(i, "SteppedEase", "ease,"), u
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(q) {
	var p, G, Z = q.GreenSockGlobals = q.GreenSockGlobals || q;
	if (!Z.TweenLite) {
		function e(a) {
			var t, o = a.split("."),
				i = Z;
			for (t = 0; o.length > t; t++) i[o[t]] = i = i[o[t]] || {};
			return i
		}

		function i(a) {
			var t, o = [],
				i = a.length;
			for (t = 0; t !== i; o.push(a[t++]));
			return o
		}

		function t() {}

		function m(e) {
			return e.length && e !== q && e[0] && (e[0] === q || e[0].nodeType && e[0].style && !e.nodeType)
		}
		var d, s, K, J, ee, te = e("com.greensock"),
			f = 1e-10,
			u = (p = Object.prototype.toString, G = p.call([]), function(e) {
				return null != e && (e instanceof Array || "object" == typeof e && !! e.push && p.call(e) === G)
			}),
			g = {}, c = function(t, a, l, o) {
				this.sc = g[t] ? g[t].sc : [], (g[t] = this).gsClass = null, this.func = l;
				var d = [];
				this.check = function(p) {
					for (var m, u, _, f, h = a.length, b = h; - 1 < --h;)(m = g[a[h]] || new c(a[h], [])).gsClass ? (d[h] = m.gsClass, b--) : p && m.sc.push(this);
					if (0 === b && l)
						for (_ = (u = ("com.greensock." + t).split(".")).pop(), f = e(u.join("."))[_] = this.gsClass = l.apply(l, d), o && (Z[_] = f, "function" == typeof define && define.amd ? define((q.GreenSockAMDPath ? q.GreenSockAMDPath + "/" : "") + t.split(".").pop(), [], function() {
							return f
						}) : "TweenMax" === t && "undefined" != typeof module && module.exports && (module.exports = f)), h = 0; this.sc.length > h; h++) this.sc[h].check()
				}, this.check(!0)
			}, b = q._gsDefine = function(a, t, e, o) {
				return new c(a, t, e, o)
			}, v = te._class = function(a, t, o) {
				return t = t || function() {}, b(a, [], function() {
					return t
				}, o), t
			};
		b.globals = Z;
		var o = [0, 0, 1, 1],
			y = [],
			w = v("easing.Ease", function(a, t, e, i) {
				this._func = a, this._type = e || 0, this._power = i || 0, this._params = t ? o.concat(t) : o
			}, !0),
			T = w.map = {}, a = w.register = function(d, t, e, i) {
				for (var s, p, m, u, g = t.split(","), l = g.length, _ = (e || "easeIn,easeOut,easeInOut").split(","); - 1 < --l;)
					for (p = g[l], s = i ? v("easing." + p, null, !0) : te.easing[p] || {}, m = _.length; - 1 < --m;) u = _[m], T[p + "." + u] = T[u + p] = s[u] = d.getRatio ? d : d[u] || new d
			};
		for ((K = w.prototype)._calcEnd = !1, K.getRatio = function(a) {
			if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
			var t = this._type,
				e = this._power,
				o = 1 === t ? 1 - a : 2 === t ? a : .5 > a ? 2 * a : 2 * (1 - a);
			return 1 === e ? o *= o : 2 === e ? o *= o * o : 3 === e ? o *= o * o * o : 4 === e && (o *= o * o * o * o), 1 === t ? 1 - o : 2 === t ? o : .5 > a ? o / 2 : 1 - o / 2
		}, s = (d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --s;) K = d[s] + ",Power" + s, a(new w(null, null, 1, s), K, "easeOut", !0), a(new w(null, null, 2, s), K, "easeIn" + (0 === s ? ",easeNone" : "")), a(new w(null, null, 3, s), K, "easeInOut");
		T.linear = te.easing.Linear.easeIn, T.swing = te.easing.Quad.easeInOut;
		var x = v("events.EventDispatcher", function(e) {
			this._listeners = {}, this._eventTarget = e || this
		});
		(K = x.prototype).addEventListener = function(d, t, e, i, s) {
			s = s || 0;
			var p, c, m = this._listeners[d],
				u = 0;
			for (null == m && (this._listeners[d] = m = []), c = m.length; - 1 < --c;)(p = m[c]).c === t && p.s === e ? m.splice(c, 1) : 0 === u && s > p.pr && (u = c + 1);
			m.splice(u, 0, {
				c: t,
				s: e,
				up: i,
				pr: s
			}), this !== J || ee || J.wake()
		}, K.removeEventListener = function(a, t) {
			var e, o = this._listeners[a];
			if (o)
				for (e = o.length; - 1 < --e;)
					if (o[e].c === t) return void o.splice(e, 1)
		}, K.dispatchEvent = function(a) {
			var t, o, r, l = this._listeners[a];
			if (l)
				for (t = l.length, o = this._eventTarget; - 1 < --t;)(r = l[t]).up ? r.c.call(r.s || o, {
					type: a,
					target: o
				}) : r.c.call(r.s || o)
		};
		var C = q.requestAnimationFrame,
			l = q.cancelAnimationFrame,
			ae = Date.now || function() {
				return new Date().getTime()
			}, S = ae();
		for (s = (d = ["ms", "moz", "webkit", "o"]).length; - 1 < --s && !C;) C = q[d[s] + "RequestAnimationFrame"], l = q[d[s] + "CancelAnimationFrame"] || q[d[s] + "CancelRequestAnimationFrame"];
		v("Ticker", function(s, m) {
			var g, _, f, b, v, y = this,
				h = ae(),
				e = !1 !== m && C,
				T = 500,
				w = 33,
				k = function(a) {
					var t, o, n = ae() - S;
					T < n && (h += n - w), S += n, y.time = (S - h) / 1e3, t = y.time - v, (!g || 0 < t || !0 === a) && (y.frame++, v += t + (b <= t ? .004 : b - t), o = !0), !0 !== a && (f = _(k)), o && y.dispatchEvent("tick")
				};
			x.call(y), y.time = y.frame = 0, y.tick = function() {
				k(!0)
			}, y.lagSmoothing = function(a, t) {
				T = a || 1e10, w = Math.min(t, T, 0)
			}, y.sleep = function() {
				null != f && (e && l ? l(f) : clearTimeout(f), _ = t, f = null, y === J && (ee = !1))
			}, y.wake = function() {
				null === f ? 10 < y.frame && (S = ae() - T + 5) : y.sleep(), _ = 0 === g ? t : e && C ? C : function(e) {
					return setTimeout(e, 0 | 1e3 * (v - y.time) + 1)
				}, y === J && (ee = !0), k(2)
			}, y.fps = function(e) {
				return arguments.length ? (b = 1 / ((g = e) || 60), v = this.time + b, void y.wake()) : g
			}, y.useRAF = function(a) {
				return arguments.length ? (y.sleep(), e = a, void y.fps(g)) : e
			}, y.fps(s), setTimeout(function() {
				e && (!f || 5 > y.frame) && y.useRAF(!1)
			}, 1500)
		}), (K = te.Ticker.prototype = new te.events.EventDispatcher).constructor = te.Ticker;
		var h = v("core.Animation", function(a, t) {
			if (this.vars = t = t || {}, this._duration = this._totalDuration = a || 0, this._delay = +t.delay || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, U) {
				ee || J.wake();
				var o = this.vars.useFrames ? V : U;
				o.add(this, o._time), this.vars.paused && this.paused(!0)
			}
		});
		J = h.ticker = new te.Ticker, (K = h.prototype)._dirty = K._gc = K._initted = K._paused = !1, K._totalTime = K._time = 0, K._rawPrevTime = -1, K._next = K._last = K._onUpdate = K._timeline = K.timeline = null, K._paused = !1;
		var oe = function() {
			ee && 2e3 < ae() - S && J.wake(), setTimeout(oe, 2e3)
		};
		oe(), K.play = function(a, t) {
			return null != a && this.seek(a, t), this.reversed(!1).paused(!1)
		}, K.pause = function(a, t) {
			return null != a && this.seek(a, t), this.paused(!0)
		}, K.resume = function(a, t) {
			return null != a && this.seek(a, t), this.paused(!1)
		}, K.seek = function(a, t) {
			return this.totalTime(+a, !1 !== t)
		}, K.restart = function(a, t) {
			return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== t, !0)
		}, K.reverse = function(a, t) {
			return null != a && this.seek(a || this.totalDuration(), t), this.reversed(!0).paused(!1)
		}, K.render = function() {}, K.invalidate = function() {
			return this
		}, K.isActive = function() {
			var a, o = this._timeline,
				e = this._startTime;
			return !o || !this._gc && !this._paused && o.isActive() && (a = o.rawTime()) >= e && e + this.totalDuration() / this._timeScale > a
		}, K._enabled = function(a, t) {
			return ee || J.wake(), this._gc = !a, this._active = this.isActive(), !0 !== t && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
		}, K._kill = function() {
			return this._enabled(!1, !1)
		}, K.kill = function(a, t) {
			return this._kill(a, t), this
		}, K._uncache = function(a) {
			for (var t = a ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
			return this
		}, K._swapSelfInParams = function(a) {
			for (var t = a.length, o = a.concat(); - 1 < --t;) "{self}" === a[t] && (o[t] = this);
			return o
		}, K.eventCallback = function(a, t, e, o) {
			if ("on" === (a || "").substr(0, 2)) {
				var i = this.vars;
				if (1 === arguments.length) return i[a];
				null == t ? delete i[a] : (i[a] = t, i[a + "Params"] = u(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e, i[a + "Scope"] = o), "onUpdate" === a && (this._onUpdate = t)
			}
			return this
		}, K.delay = function(e) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
		}, K.duration = function(e) {
			return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, K.totalDuration = function(e) {
			return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
		}, K.time = function(a, t) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, t)) : this._time
		}, K.totalTime = function(a, o, e) {
			if (ee || J.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > a && !e && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var i = this._totalDuration,
						r = this._timeline;
					if (i < a && !e && (a = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - a : a) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
						for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
				}
				this._gc && this._enabled(!0, !1), this._totalTime === a && 0 !== this._duration || (this.render(a, o, !1), O.length && Y())
			}
			return this
		}, K.progress = K.totalProgress = function(a, t) {
			return arguments.length ? this.totalTime(this.duration() * a, t) : this._time / this.duration()
		}, K.startTime = function(e) {
			return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
		}, K.timeScale = function(a) {
			if (!arguments.length) return this._timeScale;
			if (a = a || f, this._timeline && this._timeline.smoothChildTiming) {
				var o = this._pauseTime,
					e = o || 0 === o ? o : this._timeline.totalTime();
				this._startTime = e - (e - this._startTime) * this._timeScale / a
			}
			return this._timeScale = a, this._uncache(!1)
		}, K.reversed = function(e) {
			return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, K.paused = function(a) {
			if (!arguments.length) return this._paused;
			if (a != this._paused && this._timeline) {
				ee || a || J.wake();
				var t = this._timeline,
					e = t.rawTime(),
					o = e - this._pauseTime;
				!a && t.smoothChildTiming && (this._startTime += o, this._uncache(!1)), this._pauseTime = a ? e : null, this._paused = a, this._active = this.isActive(), !a && 0 != o && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !a && this._enabled(!0, !1), this
		};
		var A = v("core.SimpleTimeline", function(e) {
			h.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		(K = A.prototype = new h).constructor = A, K.kill()._gc = !1, K._first = K._last = null, K._sortChildren = !1, K.add = K.insert = function(a, t) {
			var e, o;
			if (a._startTime = +(t || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
				for (o = a._startTime; e && e._startTime > o;) e = e._prev;
			return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._timeline && this._uncache(!0), this
		}, K._remove = function(a, t) {
			return a.timeline === this && (t || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, this._timeline && this._uncache(!0)), this
		}, K.render = function(a, t, e) {
			var o, i = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = a; i;) o = i._next, (i._active || a >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (a - i._startTime) * i._timeScale, t, e) : i.render((a - i._startTime) * i._timeScale, t, e)), i = o
		}, K.rawTime = function() {
			return ee || J.wake(), this._totalTime
		};
		var I = v("TweenLite", function(l, d, e) {
			if (h.call(this, d, e), this.render = I.prototype.render, null == l) throw "Cannot tween a null target.";
			this.target = l = "string" == typeof l ? I.selector(l) || l : l;
			var p, c, m, g = l.jquery || l.length && l !== q && l[0] && (l[0] === q || l[0].nodeType && l[0].style && !l.nodeType),
				o = this.vars.overwrite;
			if (this._overwrite = o = null == o ? j[I.defaultOverwrite] : "number" == typeof o ? o >> 0 : j[o], (g || l instanceof Array || l.push && u(l)) && "number" != typeof l[0])
				for (this._targets = m = i(l), this._propLookup = [], this._siblings = [], p = 0; m.length > p; p++)(c = m[p]) ? "string" == typeof c ? "string" == typeof(c = m[p--] = I.selector(c)) && m.splice(p + 1, 1) : c.length && c !== q && c[0] && (c[0] === q || c[0].nodeType && c[0].style && !c.nodeType) ? (m.splice(p--, 1), this._targets = m = m.concat(i(c))) : (this._siblings[p] = X(c, this, !1), 1 === o && 1 < this._siblings[p].length && B(c, this, null, 1, this._siblings[p])) : m.splice(p--, 1);
			else this._propLookup = {}, this._siblings = X(l, this, !1), 1 === o && 1 < this._siblings.length && B(l, this, null, 1, this._siblings);
			(this.vars.immediateRender || 0 === d && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(-this._delay))
		}, !0);
		(K = I.prototype = new h).constructor = I, K.kill()._gc = !1, K.ratio = 0, K._firstPT = K._targets = K._overwrittenProps = K._startAt = null, K._notifyPluginsOfEnabled = K._lazy = !1, I.version = "1.13.1", I.defaultEase = K._ease = new w(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = J, I.autoSleep = !0, I.lagSmoothing = function(a, t) {
			J.lagSmoothing(a, t)
		}, I.selector = q.$ || q.jQuery || function(a) {
			var t = q.$ || q.jQuery;
			return t ? (I.selector = t)(a) : "undefined" == typeof document ? a : document.querySelectorAll ? document.querySelectorAll(a) : document.getElementById("#" === a.charAt(0) ? a.substr(1) : a)
		};
		var O = [],
			R = {}, M = I._internals = {
				isArray: u,
				isSelector: m,
				lazyTweens: O
			}, z = I._plugins = {}, N = M.tweenLookup = {}, F = 0,
			ie = M.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1
			}, j = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				true: 1,
				false: 0
			}, V = h._rootFramesTimeline = new A,
			U = h._rootTimeline = new A,
			Y = M.lazyRender = function() {
				var e = O.length;
				for (R = {}; - 1 < --e;)(d = O[e]) && !1 !== d._lazy && (d.render(d._lazy, !1, !0), d._lazy = !1);
				O.length = 0
			};
		U._startTime = J.time, V._startTime = J.frame, U._active = V._active = !0, setTimeout(Y, 1), h._updateRoot = I.render = function() {
			var a, o, n;
			if (O.length && Y(), U.render((J.time - U._startTime) * U._timeScale, !1, !1), V.render((J.frame - V._startTime) * V._timeScale, !1, !1), O.length && Y(), !(J.frame % 120)) {
				for (n in N) {
					for (a = (o = N[n].tweens).length; - 1 < --a;) o[a]._gc && o.splice(a, 1);
					0 === o.length && delete N[n]
				}
				if ((!(n = U._first) || n._paused) && I.autoSleep && !V._first && 1 === J._listeners.tick.length) {
					for (; n && n._paused;) n = n._next;
					n || J.sleep()
				}
			}
		}, J.addEventListener("tick", h._updateRoot);
		var X = function(a, t, e) {
			var o, i, l = a._gsTweenID;
			if (N[l || (a._gsTweenID = l = "t" + F++)] || (N[l] = {
				target: a,
				tweens: []
			}), t && ((o = N[l].tweens)[i = o.length] = t, e))
				for (; - 1 < --i;) o[i] === t && o.splice(i, 1);
			return N[l].tweens
		}, B = function(m, t, e, i, s) {
				var n, g, _, b;
				if (1 === i || 4 <= i) {
					for (b = s.length, n = 0; n < b; n++)
						if ((_ = s[n]) !== t) _._gc || _._enabled(!1, !1) && (g = !0);
						else if (5 === i) break;
					return g
				}
				var v, y = t._startTime + f,
					c = [],
					u = 0,
					T = 0 === t._duration;
				for (n = s.length; - 1 < --n;)(_ = s[n]) === t || _._gc || _._paused || (_._timeline === t._timeline ? y >= _._startTime && _._startTime + _.totalDuration() / _._timeScale > y && ((T || !_._initted) && 2e-10 >= y - _._startTime || (c[u++] = _)) : (v = v || H(t, 0, T), 0 === H(_, v, T) && (c[u++] = _)));
				for (n = u; - 1 < --n;) _ = c[n], 2 === i && _._kill(e, m) && (g = !0), (2 !== i || !_._firstPT && _._initted) && _._enabled(!1, !1) && (g = !0);
				return g
			}, H = function(a, t, e) {
				for (var o = a._timeline, i = o._timeScale, l = a._startTime; o._timeline;) {
					if (l += o._startTime, i *= o._timeScale, o._paused) return -100;
					o = o._timeline
				}
				return t < (l /= i) ? l - t : e && l === t || !a._initted && l - t < 2 * f ? f : (l += a.totalDuration() / a._timeScale / i) > t + f ? 0 : l - t - f
			};
		K._init = function() {
			var d, p, c, m, u, g = this.vars,
				r = this._overwrittenProps,
				o = this._duration,
				a = !! g.immediateRender,
				l = g.ease;
			if (g.startAt) {
				for (m in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), u = {}, g.startAt) u[m] = g.startAt[m];
				if (u.overwrite = !1, u.immediateRender = !0, u.lazy = a && !1 !== g.lazy, u.startAt = u.delay = null, this._startAt = I.to(this.target, 0, u), a)
					if (0 < this._time) this._startAt = null;
					else if (0 !== o) return
			} else if (g.runBackwards && 0 !== o)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					for (m in c = {}, g) ie[m] && "autoCSS" !== m || (c[m] = g[m]);
					if (!(c.overwrite = 0, c.data = "isFromStart", c.lazy = a && !1 !== g.lazy, c.immediateRender = a, this._startAt = I.to(this.target, 0, c), a)) this._startAt._init(), this._startAt._enabled(!1);
					else if (0 === this._time) return
				}
			if (this._ease = l = l ? l instanceof w ? l : "function" == typeof l ? new w(l, g.easeParams) : T[l] || I.defaultEase : I.defaultEase, g.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (d = this._targets.length; - 1 < --d;) this._initProps(this._targets[d], this._propLookup[d] = {}, this._siblings[d], r ? r[d] : null) && (p = !0);
			else p = this._initProps(this.target, this._propLookup, this._siblings, r); if (p && I._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
				for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
			this._onUpdate = g.onUpdate, this._initted = !0
		}, K._initProps = function(d, t, e, i) {
			var s, p, c, m, g, _;
			if (null == d) return !1;
			for (s in R[d._gsTweenID] && Y(), this.vars.css || d.style && d !== q && d.nodeType && z.css && !1 !== this.vars.autoCSS && function(a, t) {
				var e, o = {};
				for (e in a) ie[e] || e in t && "transform" !== e && "x" !== e && "y" !== e && "width" !== e && "height" !== e && "className" !== e && "border" !== e || !(!z[e] || z[e] && z[e]._autoCSS) || (o[e] = a[e], delete a[e]);
				a.css = o
			}(this.vars, d), this.vars) {
				if (_ = this.vars[s], ie[s]) _ && (_ instanceof Array || _.push && u(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[s] = _ = this._swapSelfInParams(_, this));
				else if (z[s] && (m = new z[s])._onInitTween(d, this.vars[s], this)) {
					for (this._firstPT = g = {
						_next: this._firstPT,
						t: m,
						p: "setRatio",
						s: 0,
						c: 1,
						f: !0,
						n: s,
						pg: !0,
						pr: m._priority
					}, p = m._overwriteProps.length; - 1 < --p;) t[m._overwriteProps[p]] = this._firstPT;
					(m._priority || m._onInitAllProps) && (c = !0), (m._onDisable || m._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = t[s] = g = {
					_next: this._firstPT,
					t: d,
					p: s,
					f: "function" == typeof d[s],
					n: s,
					pg: !1,
					pr: 0
				}, g.s = g.f ? d[s.indexOf("set") || "function" != typeof d["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(d[s]), g.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * +_.substr(2) : +_ - g.s || 0;
				g && g._next && (g._next._prev = g)
			}
			return i && this._kill(i, d) ? this._initProps(d, t, e, i) : 1 < this._overwrite && this._firstPT && 1 < e.length && B(d, this, t, this._overwrite, e) ? (this._kill(t, d), this._initProps(d, t, e, i)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[d._gsTweenID] = !0), c)
		}, K.render = function(d, m, e) {
			var g, _, b, v, T = this._time,
				a = this._duration,
				l = this._rawPrevTime;
			if (a <= d) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (g = !0, _ = "onComplete"), 0 === a && (this._initted || !this.vars.lazy || e) && (this._startTime === this._timeline._duration && (d = 0), (0 == d || 0 > l || l === f) && l !== d && (e = !0, f < l && (_ = "onReverseComplete")), this._rawPrevTime = v = !m || d || l === d ? d : f);
			else if (1e-7 > d) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== T || 0 === a && 0 < l && l !== f) && (_ = "onReverseComplete", g = this._reversed), 0 > d ? (this._active = !1, 0 !== a || !this._initted && this.vars.lazy && !e || (0 <= l && (e = !0), this._rawPrevTime = v = !m || d || l === d ? d : f)) : this._initted || (e = !0);
			else if (this._totalTime = this._time = d, this._easeType) {
				var h = d / a,
					x = this._easeType,
					u = this._easePower;
				(1 === x || 3 === x && .5 <= h) && (h = 1 - h), 3 === x && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === x ? 1 - h : 2 === x ? h : .5 > d / a ? h / 2 : 1 - h / 2
			} else this.ratio = this._ease.getRatio(d / a); if (this._time !== T || e) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!e && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = T, this._rawPrevTime = l, O.push(this), void(this._lazy = d);
					this._time && !g ? this.ratio = this._ease.getRatio(this._time / a) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== T && 0 <= d && (this._active = !0), 0 === T && (this._startAt && (0 <= d ? this._startAt.render(d, m, e) : _ = _ || "_dummyGS"), !this.vars.onStart || 0 === this._time && 0 !== a || m || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y)), b = this._firstPT; b;) b.f ? b.t[b.p](b.c * this.ratio + b.s) : b.t[b.p] = b.c * this.ratio + b.s, b = b._next;
				this._onUpdate && (0 > d && this._startAt && this._startTime && this._startAt.render(d, m, e), m || this._time === T && !g || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), _ && (!this._gc || e) && (0 > d && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(d, m, e), g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !m && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || y), 0 === a && this._rawPrevTime === f && v !== f && (this._rawPrevTime = 0))
			}
		}, K._kill = function(d, p) {
			if ("all" === d && (d = null), null == d && (null == p || p === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			var c, g, _, f, b, v, y, T;
			if (p = "string" == typeof p ? I.selector(p) || p : p || this._targets || this.target, (u(p) || m(p)) && "number" != typeof p[0])
				for (c = p.length; - 1 < --c;) this._kill(d, p[c]) && (v = !0);
			else {
				if (this._targets) {
					for (c = this._targets.length; - 1 < --c;)
						if (p === this._targets[c]) {
							b = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], g = this._overwrittenProps[c] = d ? this._overwrittenProps[c] || {} : "all";
							break
						}
				} else {
					if (p !== this.target) return !1;
					b = this._propLookup, g = this._overwrittenProps = d ? this._overwrittenProps || {} : "all"
				} if (b) {
					for (_ in y = d || b, T = d !== g && "all" !== g && d !== b && ("object" != typeof d || !d._tempKill), y)(f = b[_]) && (f.pg && f.t._kill(y) && (v = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete b[_]), T && (g[_] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return v
		}, K.invalidate = function() {
			return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
		}, K._enabled = function(a, t) {
			if (ee || J.wake(), a && this._gc) {
				var e, o = this._targets;
				if (o)
					for (e = o.length; - 1 < --e;) this._siblings[e] = X(o[e], this, !0);
				else this._siblings = X(this.target, this, !0)
			}
			return h.prototype._enabled.call(this, a, t), this._notifyPluginsOfEnabled && this._firstPT && I._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
		}, I.to = function(a, t, e) {
			return new I(a, t, e)
		}, I.from = function(a, t, e) {
			return e.runBackwards = !0, e.immediateRender = 0 != e.immediateRender, new I(a, t, e)
		}, I.fromTo = function(a, t, e, o) {
			return o.startAt = e, o.immediateRender = 0 != o.immediateRender && 0 != e.immediateRender, new I(a, t, o)
		}, I.delayedCall = function(a, t, e, o, i) {
			return new I(t, 0, {
				delay: a,
				onComplete: t,
				onCompleteParams: e,
				onCompleteScope: o,
				onReverseComplete: t,
				onReverseCompleteParams: e,
				onReverseCompleteScope: o,
				immediateRender: !1,
				useFrames: i,
				overwrite: 0
			})
		}, I.set = function(a, t) {
			return new I(a, 0, t)
		}, I.getTweensOf = function(a, o) {
			if (null == a) return [];
			var e, l, d, p;
			if (a = "string" == typeof a ? I.selector(a) || a : a, (u(a) || m(a)) && "number" != typeof a[0]) {
				for (e = a.length, l = []; - 1 < --e;) l = l.concat(I.getTweensOf(a[e], o));
				for (e = l.length; - 1 < --e;)
					for (p = l[e], d = e; - 1 < --d;) p === l[d] && l.splice(e, 1)
			} else
				for (e = (l = X(a).concat()).length; - 1 < --e;)(l[e]._gc || o && !l[e].isActive()) && l.splice(e, 1);
			return l
		}, I.killTweensOf = I.killDelayedCallsTo = function(a, t, o) {
			"object" == typeof t && (o = t, t = !1);
			for (var r = I.getTweensOf(a, t), s = r.length; - 1 < --s;) r[s]._kill(o, a)
		};
		var W = v("plugins.TweenPlugin", function(a, t) {
			this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = W.prototype
		}, !0);
		if (K = W.prototype, W.version = "1.10.1", W.API = 2, K._firstPT = null, K._addTween = function(l, t, e, i, s, n) {
			var r, d;
			return null != i && (r = "number" == typeof i || "=" !== i.charAt(1) ? +i - e : parseInt(i.charAt(0) + "1", 10) * +i.substr(2)) ? (this._firstPT = d = {
				_next: this._firstPT,
				t: l,
				p: t,
				s: e,
				c: r,
				f: "function" == typeof l[t],
				n: s || t,
				r: n
			}, d._next && (d._next._prev = d), d) : void 0
		}, K.setRatio = function(a) {
			for (var t, o = this._firstPT; o;) t = o.c * a + o.s, o.r ? t = Math.round(t) : 1e-6 > t && -1e-6 < t && (t = 0), o.f ? o.t[o.p](t) : o.t[o.p] = t, o = o._next
		}, K._kill = function(a) {
			var t, o = this._overwriteProps,
				i = this._firstPT;
			if (null != a[this._propName]) this._overwriteProps = [];
			else
				for (t = o.length; - 1 < --t;) null != a[o[t]] && o.splice(t, 1);
			for (; i;) null != a[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
			return !1
		}, K._roundProps = function(a, t) {
			for (var e = this._firstPT; e;)(a[this._propName] || null != e.n && a[e.n.split(this._propName + "_").join("")]) && (e.r = t), e = e._next
		}, I._onPluginEvent = function(l, t) {
			var e, d, p, c, m, u = t._firstPT;
			if ("_onInitAllProps" === l) {
				for (; u;) {
					for (m = u._next, d = p; d && d.pr > u.pr;) d = d._next;
					(u._prev = d ? d._prev : c) ? u._prev._next = u : p = u, (u._next = d) ? d._prev = u : c = u, u = m
				}
				u = t._firstPT = p
			}
			for (; u;) u.pg && "function" == typeof u.t[l] && u.t[l]() && (e = !0), u = u._next;
			return e
		}, W.activate = function(a) {
			for (var t = a.length; - 1 < --t;) a[t].API === W.API && (z[new a[t]()._propName] = a[t]);
			return !0
		}, b.plugin = function(l) {
			if (!(l && l.propName && l.init && l.API)) throw "illegal plugin definition.";
			var t, d = l.propName,
				i = l.priority || 0,
				s = l.overwriteProps,
				n = {
					init: "_onInitTween",
					set: "setRatio",
					kill: "_kill",
					round: "_roundProps",
					initAll: "_onInitAllProps"
				}, r = v("plugins." + d.charAt(0).toUpperCase() + d.substr(1) + "Plugin", function() {
					W.call(this, d, i), this._overwriteProps = s || []
				}, !0 === l.global),
				o = r.prototype = new W(d);
			for (t in (o.constructor = r).API = l.API, n) "function" == typeof l[t] && (o[n[t]] = l[t]);
			return r.version = l.version, W.activate([r]), r
		}, d = q._gsQueue) {
			for (s = 0; d.length > s; s++) d[s]();
			for (K in g) g[K].func || q.console.log("GSAP encountered missing dependency: com.greensock." + K)
		}
		ee = !1
	}
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window), public_vars = public_vars || {};

function resizable() {
	is("largescreen"), ismdxl(), is("tabletscreen"), is("tabletscreen") && (public_vars.$sidebarMenu.addClass("collapsed"), ps_destroy()), isxs(), jQuery(window).trigger("xenon.resize")
}

function get_current_breakpoint() {
	var a = jQuery(window).width(),
		t = public_vars.breakpoints;
	for (var e in t) {
		var o = t[e],
			i = o[0],
			n = o[1];
		if (-1 == n && (n = a), i <= a && a <= n) return e
	}
	return null
}

function is(e) {
	return get_current_breakpoint() == e
}

function isxs() {
	return is("devicescreen") || is("sdevicescreen")
}

function ismdxl() {
	return is("tabletscreen") || is("largescreen")
}

function trigger_resizable() {
	public_vars.lastBreakpoint != get_current_breakpoint() && (public_vars.lastBreakpoint = get_current_breakpoint(), resizable(public_vars.lastBreakpoint)), jQuery(window).trigger("xenon.resized")
}
if (jQuery.extend(public_vars, {
	breakpoints: {
		largescreen: [991, -1],
		tabletscreen: [768, 990],
		devicescreen: [420, 767],
		sdevicescreen: [0, 419]
	},
	lastBreakpoint: null
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function countUp(d, t, e, i, s, n) {
	for (var r = 0, p = ["webkit", "moz", "ms", "o"], a = 0; a < p.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[p[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[p[a] + "CancelAnimationFrame"] || window[p[a] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
		var t = new Date().getTime(),
			e = Math.max(0, 16 - (t - r)),
			o = window.setTimeout(function() {
				a(t + e)
			}, e);
		return r = t + e, o
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
		clearTimeout(e)
	}), this.options = n || {
		useEasing: !0,
		useGrouping: !0,
		separator: ",",
		decimal: "."
	}, "" == this.options.separator && (this.options.useGrouping = !1), null == this.options.prefix && (this.options.prefix = ""), null == this.options.suffix && (this.options.suffix = "");
	var c = this;
	this.d = "string" == typeof d ? document.getElementById(d) : d, this.startVal = +t, this.endVal = +e, this.countDown = this.startVal > this.endVal, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, i || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * s || 2e3, this.version = function() {
		return "1.3.1"
	}, this.printValue = function(a) {
		var t = isNaN(a) ? "--" : c.formatNumber(a);
		"INPUT" == c.d.tagName ? this.d.value = t : this.d.innerHTML = t
	}, this.easeOutExpo = function(a, t, e, o) {
		return 1024 * e * (1 - Math.pow(2, -10 * a / o)) / 1023 + t
	}, this.count = function(a) {
		null === c.startTime && (c.startTime = a);
		var t = (c.timestamp = a) - c.startTime;
		if (!(c.remaining = c.duration - t, c.options.useEasing)) c.countDown ? (e = (c.startVal - c.endVal) * (t / c.duration), c.frameVal = c.startVal - e) : c.frameVal = c.startVal + (c.endVal - c.startVal) * (t / c.duration);
		else if (c.countDown) {
			var e = c.easeOutExpo(t, 0, c.startVal - c.endVal, c.duration);
			c.frameVal = c.startVal - e
		} else c.frameVal = c.easeOutExpo(t, c.startVal, c.endVal - c.startVal, c.duration);
		c.frameVal = c.countDown ? c.frameVal < c.endVal ? c.endVal : c.frameVal : c.frameVal > c.endVal ? c.endVal : c.frameVal, c.frameVal = Math.round(c.frameVal * c.dec) / c.dec, c.printValue(c.frameVal), t < c.duration ? c.rAF = requestAnimationFrame(c.count) : null != c.callback && c.callback()
	}, this.start = function(e) {
		return c.callback = e, isNaN(c.endVal) || isNaN(c.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), c.printValue()) : c.rAF = requestAnimationFrame(c.count), !1
	}, this.stop = function() {
		cancelAnimationFrame(c.rAF)
	}, this.reset = function() {
		c.startTime = null, c.startVal = t, cancelAnimationFrame(c.rAF), c.printValue(c.startVal)
	}, this.resume = function() {
		c.stop(), c.startTime = null, c.duration = c.remaining, c.startVal = c.frameVal, requestAnimationFrame(c.count)
	}, this.formatNumber = function(a) {
		var o, r, l, d;
		if (a = a.toFixed(c.decimals), r = (o = (a += "").split("."))[0], l = 1 < o.length ? c.options.decimal + o[1] : "", d = /(\d+)(\d{3})/, c.options.useGrouping)
			for (; d.test(r);) r = r.replace(d, "$1" + c.options.separator + "$2");
		return c.options.prefix + r + l + c.options.suffix
	}, c.printValue(c.startVal)
}! function() {
	var e = jQuery.fn.jquery.split(" ")[0].split(".");
	if (2 > e[0] && 9 > e[1] || 1 == e[0] && 9 == e[1] && 1 > e[2]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(a) {
	a.fn.emulateTransitionEnd = function(o) {
		var t = !1,
			n = this;
		return a(this).one("bsTransitionEnd", function() {
			t = !0
		}), setTimeout(function() {
			t || a(n).trigger(a.support.transition.end)
		}, o), this
	}, a(function() {
		a.support.transition = function() {
			var a = document.createElement("bootstrap"),
				t = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for (var e in t)
				if (void 0 !== a.style[e]) return {
					end: t[e]
				};
			return !1
		}(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(e) {
				return a(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery),
function(a) {
	function r(e) {
		a(e).on("click", o, this.close)
	}
	var o = "[data-dismiss=\"alert\"]";
	r.VERSION = "3.3.1", r.TRANSITION_DURATION = 150, r.prototype.close = function(o) {
		function l() {
			d.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			i = e.attr("data-target");
		i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var d = a(i);
		o && o.preventDefault(), d.length || (d = e.closest(".alert")), d.trigger(o = a.Event("close.bs.alert")), o.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", l).emulateTransitionEnd(r.TRANSITION_DURATION) : l())
	};
	var e = a.fn.alert;
	a.fn.alert = function(o) {
		return this.each(function() {
			var i = a(this),
				t = i.data("bs.alert");
			t || i.data("bs.alert", t = new r(this)), "string" == typeof o && t[o].call(i)
		})
	}, a.fn.alert.Constructor = r, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", "[data-dismiss=\"alert\"]", r.prototype.close)
}(jQuery),
function(a) {
	function o(o) {
		return this.each(function() {
			var n = a(this),
				t = n.data("bs.button");
			t || n.data("bs.button", t = new i(this, "object" == typeof o && o)), "toggle" == o ? t.toggle() : o && t.setState(o)
		})
	}
	var i = function(o, t) {
		this.$element = a(o), this.options = a.extend({}, i.DEFAULTS, t), this.isLoading = !1
	};
	i.VERSION = "3.3.1", i.DEFAULTS = {
		loadingText: "loading..."
	}, i.prototype.setState = function(e) {
		var o = this.$element,
			i = o.is("input") ? "val" : "html",
			r = o.data();
		e += "Text", null == r.resetText && o.data("resetText", o[i]()), setTimeout(a.proxy(function() {
			o[i](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, o.removeClass("disabled").removeAttr("disabled"))
		}, this), 0)
	}, i.prototype.toggle = function() {
		var a = !0,
			o = this.$element.closest("[data-toggle=\"buttons\"]");
		if (o.length) {
			var e = this.$element.find("input");
			"radio" == e.prop("type") && (e.prop("checked") && this.$element.hasClass("active") ? a = !1 : o.find(".active").removeClass("active")), a && e.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		a && this.$element.toggleClass("active")
	};
	var e = a.fn.button;
	a.fn.button = o, a.fn.button.Constructor = i, a.fn.button.noConflict = function() {
		return a.fn.button = e, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=\"button\"]", function(i) {
		var t = a(i.target);
		t.hasClass("btn") || (t = t.closest(".btn")), o.call(t, "toggle"), i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", "[data-toggle^=\"button\"]", function(e) {
		a(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery),
function(d) {
	function a(a) {
		return this.each(function() {
			var o = d(this),
				t = o.data("bs.carousel"),
				n = d.extend({}, l.DEFAULTS, o.data(), "object" == typeof a && a),
				i = "string" == typeof a ? a : n.slide;
			t || o.data("bs.carousel", t = new l(this, n)), "number" == typeof a ? t.to(a) : i ? t[i]() : n.interval && t.pause().cycle()
		})
	}

	function l(a, t) {
		this.$element = d(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
	}

	function o(o) {
		var t, l = d(this),
			i = d(l.attr("data-target") || (t = l.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
		if (i.hasClass("carousel")) {
			var s = d.extend({}, i.data(), l.data()),
				n = l.attr("data-slide-to");
			n && (s.interval = !1), a.call(i, s), n && i.data("bs.carousel").to(n), o.preventDefault()
		}
	}
	l.VERSION = "3.3.1", l.TRANSITION_DURATION = 600, l.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, l.prototype.keydown = function(e) {
		if (!/input|textarea/i.test(e.target.tagName)) {
			switch (e.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return;
			}
			e.preventDefault()
		}
	}, l.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
	}, l.prototype.getItemIndex = function(e) {
		return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
	}, l.prototype.getItemForDirection = function(a, t) {
		var e = this.getItemIndex(t);
		if (("prev" == a && 0 === e || "next" == a && e == this.$items.length - 1) && !this.options.wrap) return t;
		var o = (e + ("prev" == a ? -1 : 1)) % this.$items.length;
		return this.$items.eq(o)
	}, l.prototype.to = function(a) {
		var t = this,
			e = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			t.to(a)
		}) : e == a ? this.pause().cycle() : this.slide(e < a ? "next" : "prev", this.$items.eq(a))
	}, l.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, l.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, l.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, l.prototype.slide = function(p, t) {
		var e = this.$element.find(".item.active"),
			i = t || this.getItemForDirection(p, e),
			s = this.interval,
			n = "next" == p ? "left" : "right",
			r = this;
		if (i.hasClass("active")) return this.sliding = !1;
		var o = i[0],
			a = d.Event("slide.bs.carousel", {
				relatedTarget: o,
				direction: n
			});
		if (this.$element.trigger(a), !a.isDefaultPrevented()) {
			if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var m = d(this.$indicators.children()[this.getItemIndex(i)]);
				m && m.addClass("active")
			}
			var u = d.Event("slid.bs.carousel", {
				relatedTarget: o,
				direction: n
			});
			return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(p), i[0].offsetWidth, e.addClass(n), i.addClass(n), e.one("bsTransitionEnd", function() {
				i.removeClass([p, n].join(" ")).addClass("active"), e.removeClass(["active", n].join(" ")), r.sliding = !1, setTimeout(function() {
					r.$element.trigger(u)
				}, 0)
			}).emulateTransitionEnd(l.TRANSITION_DURATION)) : (e.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(u)), s && this.cycle(), this
		}
	};
	var e = d.fn.carousel;
	d.fn.carousel = a, d.fn.carousel.Constructor = l, d.fn.carousel.noConflict = function() {
		return d.fn.carousel = e, this
	}, d(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), d(window).on("load", function() {
		d("[data-ride=\"carousel\"]").each(function() {
			var e = d(this);
			a.call(e, e.data())
		})
	})
}(jQuery),
function(d) {
	function o(a) {
		var t, o = a.attr("data-target") || (t = a.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
		return d(o)
	}

	function p(o) {
		return this.each(function() {
			var n = d(this),
				t = n.data("bs.collapse"),
				r = d.extend({}, a.DEFAULTS, n.data(), "object" == typeof o && o);
			!t && r.toggle && "show" == o && (r.toggle = !1), t || n.data("bs.collapse", t = new a(this, r)), "string" == typeof o && t[o]()
		})
	}
	var a = function(o, t) {
		this.$element = d(o), this.options = d.extend({}, a.DEFAULTS, t), this.$trigger = d(this.options.trigger).filter("[href=\"#" + o.id + "\"], [data-target=\"#" + o.id + "\"]"), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	a.VERSION = "3.3.1", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
		toggle: !0,
		trigger: "[data-toggle=\"collapse\"]"
	}, a.prototype.dimension = function() {
		return this.$element.hasClass("width") ? "width" : "height"
	}, a.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var o, l = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(l && l.length && (o = l.data("bs.collapse")) && o.transitioning)) {
				var e = d.Event("show.bs.collapse");
				if (this.$element.trigger(e), !e.isDefaultPrevented()) {
					function e() {
						this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					}
					l && l.length && (p.call(l, "hide"), o || l.data("bs.collapse", null));
					var i = this.dimension();
					if (this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, !d.support.transition) return e.call(this);
					var s = d.camelCase(["scroll", i].join("-"));
					this.$element.one("bsTransitionEnd", d.proxy(e, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[i](this.$element[0][s])
				}
			}
		}
	}, a.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var o = d.Event("hide.bs.collapse");
			if (this.$element.trigger(o), !o.isDefaultPrevented()) {
				function e() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				}
				var t = this.dimension();
				return this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, d.support.transition ? void this.$element[t](0).one("bsTransitionEnd", d.proxy(e, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, a.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, a.prototype.getParent = function() {
		return d(this.options.parent).find("[data-toggle=\"collapse\"][data-parent=\"" + this.options.parent + "\"]").each(d.proxy(function(a, t) {
			var e = d(t);
			this.addAriaAndCollapsedClass(o(e), e)
		}, this)).end()
	}, a.prototype.addAriaAndCollapsedClass = function(a, t) {
		var e = a.hasClass("in");
		a.attr("aria-expanded", e), t.toggleClass("collapsed", !e).attr("aria-expanded", e)
	};
	var e = d.fn.collapse;
	d.fn.collapse = p, d.fn.collapse.Constructor = a, d.fn.collapse.noConflict = function() {
		return d.fn.collapse = e, this
	}, d(document).on("click.bs.collapse.data-api", "[data-toggle=\"collapse\"]", function(a) {
		var t = d(this);
		t.attr("data-target") || a.preventDefault();
		var e = o(t),
			i = e.data("bs.collapse") ? "toggle" : d.extend({}, t.data(), {
				trigger: this
			});
		p.call(e, i)
	})
}(jQuery),
function(d) {
	function a(a) {
		a && 3 === a.which || (d(".dropdown-backdrop").remove(), d(e).each(function() {
			var o = d(this),
				t = p(o),
				e = {
					relatedTarget: this
				};
			t.hasClass("open") && (t.trigger(a = d.Event("hide.bs.dropdown", e)), a.isDefaultPrevented() || (o.attr("aria-expanded", "false"), t.removeClass("open").trigger("hidden.bs.dropdown", e)))
		}))
	}

	function p(a) {
		var t = a.attr("data-target");
		t || (t = (t = a.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
		var o = t && d(t);
		return o && o.length ? o : a.parent()
	}

	function o(e) {
		d(e).on("click.bs.dropdown", this.toggle)
	}
	var e = "[data-toggle=\"dropdown\"]";
	o.VERSION = "3.3.1", o.prototype.toggle = function(o) {
		var r = d(this);
		if (!r.is(".disabled, :disabled")) {
			var e = p(r),
				i = e.hasClass("open");
			if (a(), !i) {
				"ontouchstart" in document.documentElement && !e.closest(".navbar-nav").length && d("<div class=\"dropdown-backdrop\"/>").insertAfter(d(this)).on("click", a);
				var s = {
					relatedTarget: this
				};
				if (e.trigger(o = d.Event("show.bs.dropdown", s)), o.isDefaultPrevented()) return;
				r.trigger("focus").attr("aria-expanded", "true"), e.toggleClass("open").trigger("shown.bs.dropdown", s)
			}
			return !1
		}
	}, o.prototype.keydown = function(a) {
		if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
			var t = d(this);
			if (a.preventDefault(), a.stopPropagation(), !t.is(".disabled, :disabled")) {
				var e = p(t),
					i = e.hasClass("open");
				if (!i && 27 != a.which || i && 27 == a.which) return 27 == a.which && e.find("[data-toggle=\"dropdown\"]").trigger("focus"), t.trigger("click");
				var n = e.find("[role=\"menu\"] li:not(.divider):visible a, [role=\"listbox\"] li:not(.divider):visible a");
				if (n.length) {
					var r = n.index(a.target);
					38 == a.which && 0 < r && r--, 40 == a.which && r < n.length - 1 && r++, ~r || (r = 0), n.eq(r).trigger("focus")
				}
			}
		}
	};
	var i = d.fn.dropdown;
	d.fn.dropdown = function(a) {
		return this.each(function() {
			var i = d(this),
				t = i.data("bs.dropdown");
			t || i.data("bs.dropdown", t = new o(this)), "string" == typeof a && t[a].call(i)
		})
	}, d.fn.dropdown.Constructor = o, d.fn.dropdown.noConflict = function() {
		return d.fn.dropdown = i, this
	}, d(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
		e.stopPropagation()
	}).on("click.bs.dropdown.data-api", "[data-toggle=\"dropdown\"]", o.prototype.toggle).on("keydown.bs.dropdown.data-api", "[data-toggle=\"dropdown\"]", o.prototype.keydown).on("keydown.bs.dropdown.data-api", "[role=\"menu\"]", o.prototype.keydown).on("keydown.bs.dropdown.data-api", "[role=\"listbox\"]", o.prototype.keydown)
}(jQuery),
function(l) {
	function r(a, r) {
		return this.each(function() {
			var n = l(this),
				t = n.data("bs.modal"),
				s = l.extend({}, o.DEFAULTS, n.data(), "object" == typeof a && a);
			t || n.data("bs.modal", t = new o(this, s)), "string" == typeof a ? t[a](r) : s.show && t.show(r)
		})
	}

	function o(a, t) {
		this.options = t, this.$body = l(document.body), this.$element = l(a), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, l.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	}
	o.VERSION = "3.3.1", o.TRANSITION_DURATION = 300, o.BACKDROP_TRANSITION_DURATION = 150, o.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, o.prototype.toggle = function(e) {
		return this.isShown ? this.hide() : this.show(e)
	}, o.prototype.show = function(a) {
		var i = this,
			e = l.Event("show.bs.modal", {
				relatedTarget: a
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", "[data-dismiss=\"modal\"]", l.proxy(this.hide, this)), this.backdrop(function() {
			var n = l.support.transition && i.$element.hasClass("fade");
			i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
			var t = l.Event("shown.bs.modal", {
				relatedTarget: a
			});
			n ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
				i.$element.trigger("focus").trigger(t)
			}).emulateTransitionEnd(o.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t)
		}))
	}, o.prototype.hide = function(e) {
		e && e.preventDefault(), e = l.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), l(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), l.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", l.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
	}, o.prototype.enforceFocus = function() {
		l(document).off("focusin.bs.modal").on("focusin.bs.modal", l.proxy(function(e) {
			this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
		}, this))
	}, o.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", l.proxy(function(e) {
			27 == e.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, o.prototype.resize = function() {
		this.isShown ? l(window).on("resize.bs.modal", l.proxy(this.handleUpdate, this)) : l(window).off("resize.bs.modal")
	}, o.prototype.hideModal = function() {
		var e = this;
		this.$element.hide(), this.backdrop(function() {
			e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
		})
	}, o.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, o.prototype.backdrop = function(a) {
		var t = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var i = l.support.transition && e;
			if (this.$backdrop = l("<div class=\"modal-backdrop " + e + "\" />").prependTo(this.$element).on("click.dismiss.bs.modal", l.proxy(function(e) {
				e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) return;
			i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : a()
		} else if (!this.isShown && this.$backdrop) {
			function e() {
				t.removeBackdrop(), a && a()
			}
			this.$backdrop.removeClass("in"), l.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()
		} else a && a()
	}, o.prototype.handleUpdate = function() {
		this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
	}, o.prototype.adjustBackdrop = function() {
		this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
	}, o.prototype.adjustDialog = function() {
		var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
		})
	}, o.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, o.prototype.checkScrollbar = function() {
		this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
	}, o.prototype.setScrollbar = function() {
		var e = parseInt(this.$body.css("padding-right") || 0, 10);
		this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
	}, o.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	}, o.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var t = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), t
	};
	var e = l.fn.modal;
	l.fn.modal = r, l.fn.modal.Constructor = o, l.fn.modal.noConflict = function() {
		return l.fn.modal = e, this
	}, l(document).on("click.bs.modal.data-api", "[data-toggle=\"modal\"]", function(a) {
		var t = l(this),
			e = t.attr("href"),
			o = l(t.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			i = o.data("bs.modal") ? "toggle" : l.extend({
				remote: !/#/.test(e) && e
			}, o.data(), t.data());
		t.is("a") && a.preventDefault(), o.one("show.bs.modal", function(e) {
			e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
				t.is(":visible") && t.trigger("focus")
			})
		}), r.call(o, i, this)
	})
}(jQuery),
function(b) {
	function _(a, t) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, t)
	}
	_.VERSION = "3.3.1", _.TRANSITION_DURATION = 150, _.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, _.prototype.init = function(l, t, e) {
		this.enabled = !0, this.type = l, this.$element = b(t), this.options = this.getOptions(e), this.$viewport = this.options.viewport && b(this.options.viewport.selector || this.options.viewport);
		for (var i, d = this.options.trigger.split(" "), s = d.length; s--;)
			if (i = d[s], "click" == i) this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this));
			else if ("manual" != i) {
			var p = "hover" == i ? "mouseenter" : "focusin",
				o = "hover" == i ? "mouseleave" : "focusout";
			this.$element.on(p + "." + this.type, this.options.selector, b.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, b.proxy(this.leave, this))
		}
		this.options.selector ? this._options = b.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, _.prototype.getDefaults = function() {
		return _.DEFAULTS
	}, _.prototype.getOptions = function(e) {
		return (e = b.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, _.prototype.getDelegateOptions = function() {
		var a = {}, o = this.getDefaults();
		return this._options && b.each(this._options, function(i, t) {
			o[i] != t && (a[i] = t)
		}), a
	}, _.prototype.enter = function(a) {
		var t = a instanceof this.constructor ? a : b(a.currentTarget).data("bs." + this.type);
		return t && t.$tip && t.$tip.is(":visible") ? void(t.hoverState = "in") : (t || (t = new this.constructor(a.currentTarget, this.getDelegateOptions()), b(a.currentTarget).data("bs." + this.type, t)), clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
			"in" == t.hoverState && t.show()
		}, t.options.delay.show)) : t.show())
	}, _.prototype.leave = function(a) {
		var t = a instanceof this.constructor ? a : b(a.currentTarget).data("bs." + this.type);
		return t || (t = new this.constructor(a.currentTarget, this.getDelegateOptions()), b(a.currentTarget).data("bs." + this.type, t)), clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
			"out" == t.hoverState && t.hide()
		}, t.options.delay.hide)) : t.hide()
	}, _.prototype.show = function() {
		var g = b.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			function r() {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			}
			this.$element.trigger(g);
			var t = b.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (g.isDefaultPrevented() || !t) return;
			var e = this,
				i = this.tip(),
				s = this.getUID(this.type);
			this.setContent(), i.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && i.addClass("fade");
			var n = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
				v = /\s?auto?\s?/i,
				o = v.test(n);
			o && (n = n.replace(v, "") || "top"), i.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(n).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
			var a = this.getPosition(),
				l = i[0].offsetWidth,
				h = i[0].offsetHeight;
			if (o) {
				var c = n,
					m = this.options.container ? b(this.options.container) : this.$element.parent(),
					p = this.getPosition(m);
				n = "bottom" == n && a.bottom + h > p.bottom ? "top" : "top" == n && a.top - h < p.top ? "bottom" : "right" == n && a.right + l > p.width ? "left" : "left" == n && a.left - l < p.left ? "right" : n, i.removeClass(c).addClass(n)
			}
			var d = this.getCalculatedOffset(n, a, l, h);
			this.applyPlacement(d, n), b.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(_.TRANSITION_DURATION) : r()
		}
	}, _.prototype.applyPlacement = function(d, t) {
		var e = this.tip(),
			i = e[0].offsetWidth,
			s = e[0].offsetHeight,
			n = parseInt(e.css("margin-top"), 10),
			m = parseInt(e.css("margin-left"), 10);
		isNaN(n) && (n = 0), isNaN(m) && (m = 0), d.top += n, d.left += m, b.offset.setOffset(e[0], b.extend({
			using: function(a) {
				e.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, d), 0), e.addClass("in");
		var g = e[0].offsetWidth,
			a = e[0].offsetHeight;
		"top" == t && a != s && (d.top = d.top + s - a);
		var l = this.getViewportAdjustedDelta(t, d, g, a);
		l.left ? d.left += l.left : d.top += l.top;
		var _ = /top|bottom/.test(t),
			c = _ ? 2 * l.left - i + g : 2 * l.top - s + a,
			u = _ ? "offsetWidth" : "offsetHeight";
		e.offset(d), this.replaceArrow(c, e[0][u], _)
	}, _.prototype.replaceArrow = function(a, t, e) {
		this.arrow().css(e ? "left" : "top", 50 * (1 - a / t) + "%").css(e ? "top" : "left", "")
	}, _.prototype.setContent = function() {
		var a = this.tip(),
			t = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), a.removeClass("fade in top bottom left right")
	}, _.prototype.hide = function(a) {
		function t() {
			"in" != e.hoverState && o.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), a && a()
		}
		var e = this,
			o = this.tip(),
			i = b.Event("hide.bs." + this.type);
		return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (o.removeClass("in"), b.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", t).emulateTransitionEnd(_.TRANSITION_DURATION) : t(), this.hoverState = null, this)
	}, _.prototype.fixTitle = function() {
		var e = this.$element;
		(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
	}, _.prototype.hasContent = function() {
		return this.getTitle()
	}, _.prototype.getPosition = function(a) {
		var l = (a = a || this.$element)[0],
			e = "BODY" == l.tagName,
			i = l.getBoundingClientRect();
		null == i.width && (i = b.extend({}, i, {
			width: i.right - i.left,
			height: i.bottom - i.top
		}));
		var d = e ? {
			top: 0,
			left: 0
		} : a.offset(),
			n = {
				scroll: e ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
			}, r = e ? {
				width: b(window).width(),
				height: b(window).height()
			} : null;
		return b.extend({}, i, n, r, d)
	}, _.prototype.getCalculatedOffset = function(a, t, e, o) {
		return "bottom" == a ? {
			top: t.top + t.height,
			left: t.left + t.width / 2 - e / 2
		} : "top" == a ? {
			top: t.top - o,
			left: t.left + t.width / 2 - e / 2
		} : "left" == a ? {
			top: t.top + t.height / 2 - o / 2,
			left: t.left - e
		} : {
			top: t.top + t.height / 2 - o / 2,
			left: t.left + t.width
		}
	}, _.prototype.getViewportAdjustedDelta = function(d, t, e, i) {
		var s = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return s;
		var n = this.options.viewport && this.options.viewport.padding || 0,
			r = this.getPosition(this.$viewport);
		if (/right|left/.test(d)) {
			var o = t.top - n - r.scroll,
				a = t.top + n - r.scroll + i;
			o < r.top ? s.top = r.top - o : a > r.top + r.height && (s.top = r.top + r.height - a)
		} else {
			var l = t.left - n,
				p = t.left + n + e;
			l < r.left ? s.left = r.left - l : p > r.width && (s.left = r.left + r.width - p)
		}
		return s
	}, _.prototype.getTitle = function() {
		var a = this.$element,
			t = this.options;
		return a.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(a[0]) : t.title)
	}, _.prototype.getUID = function(e) {
		for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
		return e
	}, _.prototype.tip = function() {
		return this.$tip = this.$tip || b(this.options.template)
	}, _.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, _.prototype.enable = function() {
		this.enabled = !0
	}, _.prototype.disable = function() {
		this.enabled = !1
	}, _.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, _.prototype.toggle = function(a) {
		var t = this;
		a && ((t = b(a.currentTarget).data("bs." + this.type)) || (t = new this.constructor(a.currentTarget, this.getDelegateOptions()), b(a.currentTarget).data("bs." + this.type, t))), t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
	}, _.prototype.destroy = function() {
		var e = this;
		clearTimeout(this.timeout), this.hide(function() {
			e.$element.off("." + e.type).removeData("bs." + e.type)
		})
	};
	var e = b.fn.tooltip;
	b.fn.tooltip = function(a) {
		return this.each(function() {
			var o = b(this),
				t = o.data("bs.tooltip"),
				n = "object" == typeof a && a,
				i = n && n.selector;
			(t || "destroy" != a) && (i ? (t || o.data("bs.tooltip", t = {}), t[i] || (t[i] = new _(this, n))) : t || o.data("bs.tooltip", t = new _(this, n)), "string" == typeof a && t[a]())
		})
	}, b.fn.tooltip.Constructor = _, b.fn.tooltip.noConflict = function() {
		return b.fn.tooltip = e, this
	}
}(jQuery),
function(a) {
	function r(a, t) {
		this.init("popover", a, t)
	}
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	r.VERSION = "3.3.1", r.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
	}), ((r.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)).constructor = r).prototype.getDefaults = function() {
		return r.DEFAULTS
	}, r.prototype.setContent = function() {
		var a = this.tip(),
			t = this.getTitle(),
			e = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](t), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof e ? "html" : "append" : "text"](e), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, r.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, r.prototype.getContent = function() {
		var a = this.$element,
			t = this.options;
		return a.attr("data-content") || ("function" == typeof t.content ? t.content.call(a[0]) : t.content)
	}, r.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, r.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var e = a.fn.popover;
	a.fn.popover = function(o) {
		return this.each(function() {
			var n = a(this),
				t = n.data("bs.popover"),
				l = "object" == typeof o && o,
				i = l && l.selector;
			(t || "destroy" != o) && (i ? (t || n.data("bs.popover", t = {}), t[i] || (t[i] = new r(this, l))) : t || n.data("bs.popover", t = new r(this, l)), "string" == typeof o && t[o]())
		})
	}, a.fn.popover.Constructor = r, a.fn.popover.noConflict = function() {
		return a.fn.popover = e, this
	}
}(jQuery),
function(a) {
	function o(n, t) {
		var e = a.proxy(this.process, this);
		this.$body = a("body"), this.$scrollElement = a(a(n).is("body") ? window : n), this.options = a.extend({}, o.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
	}

	function i(i) {
		return this.each(function() {
			var n = a(this),
				t = n.data("bs.scrollspy");
			t || n.data("bs.scrollspy", t = new o(this, "object" == typeof i && i)), "string" == typeof i && t[i]()
		})
	}
	o.VERSION = "3.3.1", o.DEFAULTS = {
		offset: 10
	}, o.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, o.prototype.refresh = function() {
		var o = "offset",
			r = 0;
		a.isWindow(this.$scrollElement[0]) || (o = "position", r = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
		var e = this;
		this.$body.find(this.selector).map(function() {
			var n = a(this),
				t = n.data("target") || n.attr("href"),
				e = /^#./.test(t) && a(t);
			return e && e.length && e.is(":visible") && [
				[e[o]().top + r, t]
			] || null
		}).sort(function(a, t) {
			return a[0] - t[0]
		}).each(function() {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, o.prototype.process = function() {
		var a, l = this.$scrollElement.scrollTop() + this.options.offset,
			e = this.getScrollHeight(),
			i = this.options.offset + e - this.$scrollElement.height(),
			s = this.offsets,
			n = this.targets,
			r = this.activeTarget;
		if (this.scrollHeight != e && this.refresh(), i <= l) return r != (a = n[n.length - 1]) && this.activate(a);
		if (r && l < s[0]) return this.activeTarget = null, this.clear();
		for (a = s.length; a--;) r != n[a] && l >= s[a] && (!s[a + 1] || l <= s[a + 1]) && this.activate(n[a])
	}, o.prototype.activate = function(o) {
		this.activeTarget = o, this.clear();
		var t = this.selector + "[data-target=\"" + o + "\"]," + this.selector + "[href=\"" + o + "\"]",
			e = a(t).parents("li").addClass("active");
		e.parent(".dropdown-menu").length && (e = e.closest("li.dropdown").addClass("active")), e.trigger("activate.bs.scrollspy")
	}, o.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var e = a.fn.scrollspy;
	a.fn.scrollspy = i, a.fn.scrollspy.Constructor = o, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = e, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a("[data-spy=\"scroll\"]").each(function() {
			var e = a(this);
			i.call(e, e.data())
		})
	})
}(jQuery),
function(l) {
	function a(a) {
		return this.each(function() {
			var o = l(this),
				t = o.data("bs.tab");
			t || o.data("bs.tab", t = new d(this)), "string" == typeof a && t[a]()
		})
	}

	function d(e) {
		this.element = l(e)
	}

	function e(e) {
		e.preventDefault(), a.call(l(this), "show")
	}
	d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.show = function() {
		var a = this.element,
			t = a.closest("ul:not(.dropdown-menu)"),
			e = a.data("target");
		if (e || (e = (e = a.attr("href")) && e.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
			var d = t.find(".active:last a"),
				s = l.Event("hide.bs.tab", {
					relatedTarget: a[0]
				}),
				n = l.Event("show.bs.tab", {
					relatedTarget: d[0]
				});
			if (d.trigger(s), a.trigger(n), !n.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var r = l(e);
				this.activate(a.closest("li"), t), this.activate(r, r.parent(), function() {
					d.trigger({
						type: "hidden.bs.tab",
						relatedTarget: a[0]
					}), a.trigger({
						type: "shown.bs.tab",
						relatedTarget: d[0]
					})
				})
			}
		}
	}, d.prototype.activate = function(a, t, e) {
		function o() {
			i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !1), a.addClass("active").find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), n ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active").end().find("[data-toggle=\"tab\"]").attr("aria-expanded", !0), e && e()
		}
		var i = t.find("> .active"),
			n = e && l.support.transition && (i.length && i.hasClass("fade") || !! t.find("> .fade").length);
		i.length && n ? i.one("bsTransitionEnd", o).emulateTransitionEnd(d.TRANSITION_DURATION) : o(), i.removeClass("in")
	};
	var o = l.fn.tab;
	l.fn.tab = a, l.fn.tab.Constructor = d, l.fn.tab.noConflict = function() {
		return l.fn.tab = o, this
	}, l(document).on("click.bs.tab.data-api", "[data-toggle=\"tab\"]", e).on("click.bs.tab.data-api", "[data-toggle=\"pill\"]", e)
}(jQuery),
function(d) {
	function a(a) {
		return this.each(function() {
			var o = d(this),
				t = o.data("bs.affix");
			t || o.data("bs.affix", t = new i(this, "object" == typeof a && a)), "string" == typeof a && t[a]()
		})
	}
	var i = function(a, t) {
		this.options = d.extend({}, i.DEFAULTS, t), this.$target = d(this.options.target).on("scroll.bs.affix.data-api", d.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", d.proxy(this.checkPositionWithEventLoop, this)), this.$element = d(a), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	i.VERSION = "3.3.1", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function(d, t, e, i) {
		var s = this.$target.scrollTop(),
			n = this.$element.offset(),
			r = this.$target.height();
		if (null != e && "top" == this.affixed) return s < e && "top";
		if ("bottom" == this.affixed) return null == e ? !(s + r <= d - i) && "bottom" : !(s + this.unpin <= n.top) && "bottom";
		var o = null == this.affixed,
			a = o ? s : n.top;
		return null != e && s <= e ? "top" : null != i && d - i <= a + (o ? r : t) && "bottom"
	}, i.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			t = this.$element.offset();
		return this.pinnedOffset = t.top - a
	}, i.prototype.checkPositionWithEventLoop = function() {
		setTimeout(d.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var l = this.$element.height(),
				t = this.options.offset,
				e = t.top,
				p = t.bottom,
				c = d("body").height();
			"object" != typeof t && (p = e = t), "function" == typeof e && (e = t.top(this.$element)), "function" == typeof p && (p = t.bottom(this.$element));
			var n = this.getState(c, l, e, p);
			if (this.affixed != n) {
				null != this.unpin && this.$element.css("top", "");
				var r = "affix" + (n ? "-" + n : ""),
					o = d.Event(r + ".bs.affix");
				if (this.$element.trigger(o), o.isDefaultPrevented()) return;
				this.affixed = n, this.unpin = "bottom" == n ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == n && this.$element.offset({
				top: c - l - p
			})
		}
	};
	var e = d.fn.affix;
	d.fn.affix = a, d.fn.affix.Constructor = i, d.fn.affix.noConflict = function() {
		return d.fn.affix = e, this
	}, d(window).on("load", function() {
		d("[data-spy=\"affix\"]").each(function() {
			var o = d(this),
				t = o.data();
			t.offset = t.offset || {}, null != t.offsetBottom && (t.offset.bottom = t.offsetBottom), null != t.offsetTop && (t.offset.top = t.offsetTop), a.call(o, t)
		})
	})
}(jQuery),
function(b) {
	var p, e = {
			className: "autosizejs",
			id: "autosizejs",
			append: "\n",
			callback: !1,
			resizeDelay: 10,
			placeholder: !0
		}, n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
		r = b("<textarea tabindex=\"-1\" style=\"position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;\"/>").data("autosize", !0)[0];
	(r.style.lineHeight = "99px") === b(r).css("lineHeight") && n.push("lineHeight"), r.style.lineHeight = "", b.fn.autosize = function(m) {
			return this.length ? (m = b.extend({}, e, m || {}), r.parentNode !== document.body && b(document.body).append(r), this.each(function() {
				function d() {
					var a, n = !! window.getComputedStyle && window.getComputedStyle(f, null);
					n ? (0 !== (a = f.getBoundingClientRect().width) && "number" == typeof a || (a = parseInt(n.width, 10)), b.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(o, t) {
						a -= parseInt(n[t], 10)
					})) : a = o.width(), r.style.width = Math.max(a, 0) + "px"
				}

				function s() {
					var i, n;
					p === f ? d() : function() {
						var a = {};
						if (p = f, r.className = m.className, r.id = m.id, g = parseInt(o.css("maxHeight"), 10), b.each(n, function(i, t) {
							a[t] = o.css(t)
						}), b(r).css(a).attr("wrap", o.attr("wrap")), d(), window.chrome) {
							var e = f.style.width;
							f.style.width = "0px", f.offsetWidth, f.style.width = e
						}
					}(), r.value = !f.value && m.placeholder ? (o.attr("placeholder") || "") + m.append : f.value + m.append, r.style.overflowY = f.style.overflowY, n = parseInt(f.style.height, 10), r.scrollTop = 0, r.scrollTop = 9e4, i = r.scrollTop, g && g < i ? (f.style.overflowY = "scroll", i = g) : (f.style.overflowY = "hidden", i < _ && (i = _)), n !== (i += a) && (f.style.height = i + "px", v && m.callback.call(f, f))
				}

				function e() {
					clearTimeout(t), t = setTimeout(function() {
						var e = o.width();
						e !== c && (c = e, s())
					}, parseInt(m.resizeDelay, 10))
				}
				var g, _, t, f = this,
					o = b(f),
					a = 0,
					v = b.isFunction(m.callback),
					h = {
						height: f.style.height,
						overflow: f.style.overflow,
						overflowY: f.style.overflowY,
						wordWrap: f.style.wordWrap,
						resize: f.style.resize
					}, c = o.width(),
					y = o.css("resize");
				o.data("autosize") || (o.data("autosize", !0), "border-box" !== o.css("box-sizing") && "border-box" !== o.css("-moz-box-sizing") && "border-box" !== o.css("-webkit-box-sizing") || (a = o.outerHeight() - o.height()), _ = Math.max(parseInt(o.css("minHeight"), 10) - a || 0, o.height()), o.css({
					overflow: "hidden",
					overflowY: "hidden",
					wordWrap: "break-word"
				}), "vertical" === y ? o.css("resize", "none") : "both" === y && o.css("resize", "horizontal"), "onpropertychange" in f ? "oninput" in f ? o.on("input.autosize keyup.autosize", s) : o.on("propertychange.autosize", function() {
					"value" === event.propertyName && s()
				}) : o.on("input.autosize", s), !1 !== m.resizeDelay && b(window).on("resize.autosize", e), o.on("autosize.resize", s), o.on("autosize.resizeIncludeStyle", function() {
					p = null, s()
				}), o.on("autosize.destroy", function() {
					p = null, clearTimeout(t), b(window).off("resize", e), o.off("autosize").off(".autosize").css(h).removeData("autosize")
				}), s())
			})) : this
	}
}(window.jQuery || window.$),
function(a) {
	if ("undefined" != typeof define && define.amd) define(["jquery"], a);
	else if ("undefined" != typeof module && module.exports) {
		var t = require("jquery");
		module.exports = a(t)
	} else window.scrollMonitor = a(jQuery)
}(function(D) {
	function p() {
		return window.innerHeight || document.documentElement.clientHeight
	}

	function A() {
		if (E.viewportTop = f.scrollTop(), E.viewportBottom = E.viewportTop + E.viewportHeight, E.documentHeight = h.height(), E.documentHeight !== n) {
			for (R = c.length; R--;) c[R].recalculateLocation();
			n = E.documentHeight
		}
	}

	function e() {
		E.viewportHeight = p(), A(), i()
	}

	function i() {
		for (I = c.length; I--;) c[I].update();
		for (I = c.length; I--;) c[I].triggerCallbacks()
	}

	function s(d, t) {
		function p(e) {
			if (0 !== e.length)
				for (k = e.length; k--;)(P = e[k]).callback.call(S, C), P.isOne && e.splice(k, 1)
		}
		var e, n, f, x, k, P, S = this;
		this.watchItem = d, this.offsets = t ? t === +t ? {
			top: t,
			bottom: t
		} : D.extend({}, T, t) : T, this.callbacks = {};
		for (var h = 0, A = w.length; h < A; h++) S.callbacks[w[h]] = [];
		this.locked = !1, this.triggerCallbacks = function() {
			switch (this.isInViewport && !e && p(this.callbacks[m]), this.isFullyInViewport && !n && p(this.callbacks[_]), this.isAboveViewport !== f && this.isBelowViewport !== x && (p(this.callbacks[u]), n || this.isFullyInViewport || (p(this.callbacks[_]), p(this.callbacks[v])), e || this.isInViewport || (p(this.callbacks[m]), p(this.callbacks[g]))), !this.isFullyInViewport && n && p(this.callbacks[v]), !this.isInViewport && e && p(this.callbacks[g]), this.isInViewport !== e && p(this.callbacks[u]), !0) {
				case e !== this.isInViewport:
				case n !== this.isFullyInViewport:
				case f !== this.isAboveViewport:
				case x !== this.isBelowViewport:
					p(this.callbacks[y]);
			}
			e = this.isInViewport, n = this.isFullyInViewport, f = this.isAboveViewport, x = this.isBelowViewport
		}, this.recalculateLocation = function() {
			if (!this.locked) {
				var a = this.top,
					t = this.bottom;
				if (this.watchItem.nodeName) {
					var e = this.watchItem.style.display;
					"none" === e && (this.watchItem.style.display = "");
					var o = D(this.watchItem).offset();
					this.top = o.top, this.bottom = o.top + this.watchItem.offsetHeight, "none" === e && (this.watchItem.style.display = e)
				} else this.watchItem === +this.watchItem ? 0 < this.watchItem ? this.top = this.bottom = this.watchItem : this.top = this.bottom = E.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
				this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === a && void 0 === t || this.top === a && this.bottom === t || p(this.callbacks[b])
			}
		}, this.recalculateLocation(), this.update(), e = this.isInViewport, n = this.isFullyInViewport, f = this.isAboveViewport, x = this.isBelowViewport
	}

	function t(a) {
		return function(o, t) {
			this.on.call(this, a, o, t)
		}
	}
	var n, C, R, O, I, E = {}, f = D(window),
		h = D(document),
		c = [],
		u = "visibilityChange",
		m = "enterViewport",
		_ = "fullyEnterViewport",
		g = "exitViewport",
		v = "partiallyExitViewport",
		b = "locationChange",
		y = "stateChange",
		w = ["visibilityChange", "enterViewport", "fullyEnterViewport", "exitViewport", "partiallyExitViewport", "locationChange", "stateChange"],
		T = {
			top: 0,
			bottom: 0
		};
	E.viewportTop, E.viewportBottom, E.documentHeight, E.viewportHeight = p(), s.prototype = {
		on: function(a, t, e) {
			switch (!0) {
				case a === "visibilityChange" && !this.isInViewport && this.isAboveViewport:
				case a === "enterViewport" && this.isInViewport:
				case a === "fullyEnterViewport" && this.isFullyInViewport:
				case a === "exitViewport" && this.isAboveViewport && !this.isInViewport:
				case a === "partiallyExitViewport" && this.isAboveViewport:
					if (t(), e) return;
			}
			if (!this.callbacks[a]) throw new Error("Tried to add a scroll monitor listener of type " + a + ". Your options are: " + w.join(", "));
			this.callbacks[a].push({
				callback: t,
				isOne: e
			})
		},
		off: function(a, t) {
			if (!this.callbacks[a]) throw new Error("Tried to remove a scroll monitor listener of type " + a + ". Your options are: " + w.join(", "));
			for (var e, o = 0; e = this.callbacks[a][o]; o++)
				if (e.callback === t) {
					this.callbacks[a].splice(o, 1);
					break
				}
		},
		one: function(a, t) {
			this.on(a, t, !0)
		},
		recalculateSize: function() {
			this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
		},
		update: function() {
			this.isAboveViewport = this.top < E.viewportTop, this.isBelowViewport = this.bottom > E.viewportBottom, this.isInViewport = this.top <= E.viewportBottom && this.bottom >= E.viewportTop, this.isFullyInViewport = this.top >= E.viewportTop && this.bottom <= E.viewportBottom || this.isAboveViewport && this.isBelowViewport
		},
		destroy: function() {
			var a = c.indexOf(this);
			c.splice(a, 1);
			for (var t = 0, o = w.length; t < o; t++) this.callbacks[w[t]].length = 0
		},
		lock: function() {
			this.locked = !0
		},
		unlock: function() {
			this.locked = !1
		}
	};
	for (var x, z = 0, L = w.length; z < L; z++) x = w[z], s.prototype[x] = t(x);
	try {
		A()
	} catch (e) {
		D(A)
	}
	return f.on("scroll", function(e) {
		C = e, A(), i()
	}), f.on("resize", function() {
		clearTimeout(O), O = setTimeout(e, 100)
	}), E.beget = E.create = function(a, o) {
		"string" == typeof a && (a = D(a)[0]), a instanceof D && (a = a[0]);
		var e = new s(a, o);
		return c.push(e), e.update(), e
	}, E.update = function() {
		C = null, A(), i()
	}, E.recalculateLocations = function() {
		E.documentHeight = 0, E.update()
	}, E
}),
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(J) {
	function Q(e) {
		return "string" == typeof e ? parseInt(e, 10) : ~~e
	}
	var q = {
		wheelSpeed: 1,
		wheelPropagation: !1,
		swipePropagation: !0,
		minScrollbarLength: null,
		maxScrollbarLength: null,
		useBothWheelAxes: !1,
		useKeyboard: !0,
		suppressScrollX: !1,
		suppressScrollY: !1,
		scrollXMarginOffset: 0,
		scrollYMarginOffset: 0,
		includePadding: !1
	}, Z = 0,
		d = "WebkitAppearance" in document.documentElement.style;
	J.fn.perfectScrollbar = function(G, H) {
		return this.each(function() {
			function W(e) {
				return l.minScrollbarLength && (e = Math.max(e, l.minScrollbarLength)), l.maxScrollbarLength && (e = Math.min(e, l.maxScrollbarLength)), e
			}

			function K() {
				g.removeClass("ps-active-x"), g.removeClass("ps-active-y"), b = l.includePadding ? g.innerWidth() : g.width(), ee = l.includePadding ? g.innerHeight() : g.height(), te = g.prop("scrollWidth"), ae = g.prop("scrollHeight"), !l.suppressScrollX && te > b + l.scrollXMarginOffset ? (oe = !0, ie = W(Q((re = b - M) * b / te)), ne = Q(g.scrollLeft() * (re - ie) / (te - b))) : (oe = !1, ne = ie = 0, g.scrollLeft(0)), !l.suppressScrollY && ae > ee + l.scrollYMarginOffset ? (se = !0, le = W(Q((pe = ee - V) * ee / ae)), de = Q(g.scrollTop() * (pe - le) / (ae - ee))) : (se = !1, de = le = 0, g.scrollTop(0)), re - ie <= ne && (ne = re - ie), pe - le <= de && (de = pe - le),
				function() {
					var a = {
						width: re
					};
					a.left = ue ? g.scrollLeft() + b - te : g.scrollLeft(), be ? a.bottom = he - g.scrollTop() : a.top = ve + g.scrollTop(), D.css(a);
					var t = {
						top: g.scrollTop(),
						height: pe
					};
					we ? t.right = ue ? te - g.scrollLeft() - xe - Te.outerWidth() : xe - g.scrollLeft() : t.left = ue ? g.scrollLeft() + 2 * b - te - Ce - Te.outerWidth() : Ce + g.scrollLeft(), E.css(t), fe.css({
						left: ne,
						width: ie - ye
					}), Te.css({
						top: de,
						height: le - ke
					})
				}(), oe && g.addClass("ps-active-x"), se && g.addClass("ps-active-y")
			}

			function t() {
				function n(a) {
					var t, o, p, c, m;
					t = l, o = a.pageX - d, c = b - ie, m = Q((ne = 0 > (p = t + o) ? 0 : c < p ? c : p) * (te - b) / (b - ie)), g.scrollLeft(m), K(), a.stopPropagation(), a.preventDefault()
				}

				function e() {
					D.removeClass("in-scrolling"), J(_e).unbind(ge("mousemove"), n)
				}
				var l, d;
				fe.bind(ge("mousedown"), function(a) {
					d = a.pageX, l = fe.position().left, D.addClass("in-scrolling"), J(_e).bind(ge("mousemove"), n), J(_e).one(ge("mouseup"), e), a.stopPropagation(), a.preventDefault()
				}), l = d = null
			}

			function e() {
				function n(a) {
					var t, o, p, c, m;
					t = l, o = a.pageY - d, c = ee - le, m = Q((de = 0 > (p = t + o) ? 0 : c < p ? c : p) * (ae - ee) / (ee - le)), g.scrollTop(m), K(), a.stopPropagation(), a.preventDefault()
				}

				function e() {
					E.removeClass("in-scrolling"), J(_e).unbind(ge("mousemove"), n)
				}
				var l, d;
				Te.bind(ge("mousedown"), function(a) {
					d = a.pageY, l = Te.position().top, E.addClass("in-scrolling"), J(_e).bind(ge("mousemove"), n), J(_e).one(ge("mouseup"), e), a.stopPropagation(), a.preventDefault()
				}), l = d = null
			}

			function _(a, t) {
				var e = g.scrollTop();
				if (0 === a) {
					if (!se) return !1;
					if (0 === e && 0 < t || ae - ee <= e && 0 > t) return !l.wheelPropagation
				}
				var o = g.scrollLeft();
				if (0 === t) {
					if (!oe) return !1;
					if (0 === o && 0 > a || te - b <= o && 0 < a) return !l.wheelPropagation
				}
				return !0
			}

			function i() {
				function e(a) {
					if (d || !(0 < g.find("select:focus").length)) {
						var t = (c = (s = a).originalEvent.deltaX, m = -1 * s.originalEvent.deltaY, void 0 !== c && void 0 !== m || (c = -1 * s.originalEvent.wheelDeltaX / 6, m = s.originalEvent.wheelDeltaY / 6), s.originalEvent.deltaMode && 1 === s.originalEvent.deltaMode && (c *= 10, m *= 10), c != c && m != m && (c = 0, m = s.originalEvent.wheelDelta), [c, m]),
							e = t[0],
							i = t[1];
						p = !1, l.useBothWheelAxes ? se && !oe ? (i ? g.scrollTop(g.scrollTop() - i * l.wheelSpeed) : g.scrollTop(g.scrollTop() + e * l.wheelSpeed), p = !0) : oe && !se && (e ? g.scrollLeft(g.scrollLeft() + e * l.wheelSpeed) : g.scrollLeft(g.scrollLeft() - i * l.wheelSpeed), p = !0) : (g.scrollTop(g.scrollTop() - i * l.wheelSpeed), g.scrollLeft(g.scrollLeft() + e * l.wheelSpeed)), K(), (p = p || _(e, i)) && (a.stopPropagation(), a.preventDefault())
					}
					var s, c, m
				}
				var p = !1;
				void 0 === window.onwheel ? void 0 !== window.onmousewheel && g.bind(ge("mousewheel"), e) : g.bind(ge("wheel"), e)
			}

			function s() {
				function d() {
					l && (clearInterval(l), l = null), D.removeClass("in-scrolling"), E.removeClass("in-scrolling")
				}
				var l = null,
					p = {
						top: 0,
						left: 0
					}, c = !1;
				J(_e).bind(ge("selectionchange"), function() {
					var e;
					J.contains(g[0], 0 === (e = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : {
						rangeCount: 0
					}).rangeCount ? null : e.getRangeAt(0).commonAncestorContainer) ? c = !0 : (c = !1, d())
				}), J(window).bind(ge("mouseup"), function() {
					c && (c = !1, d())
				}), J(window).bind(ge("mousemove"), function(m) {
					if (c) {
						var t = m.pageX,
							e = m.pageY,
							i = g.offset(),
							s = i.left,
							n = i.left + g.outerWidth(),
							r = i.top,
							o = i.top + g.outerHeight();
						t < s + 3 ? (p.left = -5, D.addClass("in-scrolling")) : n - 3 < t ? (p.left = 5, D.addClass("in-scrolling")) : p.left = 0, e < r + 3 ? (p.top = 5 > r + 3 - e ? -5 : -20, E.addClass("in-scrolling")) : o - 3 < e ? (p.top = 5 > e - o + 3 ? 5 : 20, E.addClass("in-scrolling")) : p.top = 0, 0 === p.top && 0 === p.left ? d() : l = l || setInterval(function() {
							return B() ? (g.scrollTop(g.scrollTop() + p.top), g.scrollLeft(g.scrollLeft() + p.left), void K()) : void clearInterval(l)
						}, 50)
					}
				})
			}

			function n(_, t) {
				function v(a, t) {
					g.scrollTop(g.scrollTop() - t), g.scrollLeft(g.scrollLeft() - a), K()
				}

				function e() {
					p = !0
				}

				function a() {
					p = !1
				}

				function y(e) {
					return e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e.originalEvent
				}

				function T(a) {
					var t = a.originalEvent;
					return t.targetTouches && 1 === t.targetTouches.length || t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE
				}

				function i(a) {
					if (T(a)) {
						C = !0;
						var t = y(a);
						h.pageX = t.pageX, h.pageY = t.pageY, x = new Date().getTime(), null !== o && clearInterval(o), a.stopPropagation()
					}
				}

				function n(a) {
					if (!p && C && T(a)) {
						var t = y(a),
							e = {
								pageX: t.pageX,
								pageY: t.pageY
							}, i = e.pageX - h.pageX,
							s = e.pageY - h.pageY;
						v(i, s), h = e;
						var n = new Date().getTime(),
							r = n - x;
						0 < r && (w.x = i / r, w.y = s / r, x = n),
						function(a, t) {
							var e = g.scrollTop(),
								o = g.scrollLeft(),
								i = Math.abs(a),
								n = Math.abs(t);
							if (i < n) {
								if (0 > t && e === ae - ee || 0 < t && 0 === e) return !l.swipePropagation;
							} else if (n < i && (0 > a && o === te - b || 0 < a && 0 === o)) return !l.swipePropagation;
							return !0
						}(i, s) && (a.stopPropagation(), a.preventDefault())
					}
				}

				function r() {
					!p && C && (C = !1, clearInterval(o), o = setInterval(function() {
						return B() ? .01 > Math.abs(w.x) && .01 > Math.abs(w.y) ? void clearInterval(o) : (v(30 * w.x, 30 * w.y), w.x *= .8, void(w.y *= .8)) : void clearInterval(o)
					}, 10))
				}
				var h = {}, x = 0,
					w = {}, o = null,
					p = !1,
					C = !1;
				_ && (J(window).bind(ge("touchstart"), e), J(window).bind(ge("touchend"), a), g.bind(ge("touchstart"), i), g.bind(ge("touchmove"), n), g.bind(ge("touchend"), r)), t && (window.PointerEvent ? (J(window).bind(ge("pointerdown"), e), J(window).bind(ge("pointerup"), a), g.bind(ge("pointerdown"), i), g.bind(ge("pointermove"), n), g.bind(ge("pointerup"), r)) : window.MSPointerEvent && (J(window).bind(ge("MSPointerDown"), e), J(window).bind(ge("MSPointerUp"), a), g.bind(ge("MSPointerDown"), i), g.bind(ge("MSPointerMove"), n), g.bind(ge("MSPointerUp"), r)))
			}

			function r() {
				g.unbind(ge()), J(window).unbind(ge()), J(_e).unbind(ge()), g.data("perfect-scrollbar", null), g.data("perfect-scrollbar-update", null), g.data("perfect-scrollbar-destroy", null), fe.remove(), Te.remove(), D.remove(), E.remove(), g = D = E = fe = Te = oe = se = b = ee = te = ae = ie = ne = he = be = ve = le = de = xe = we = Ce = ue = ge = null
			}

			function o(e) {
				e.stopPropagation()
			}
			var l = J.extend(!0, {}, q),
				g = J(this),
				B = function() {
					return !!g
				};
			if ("object" == typeof G ? J.extend(!0, l, G) : H = G, "update" === H) return g.data("perfect-scrollbar-update") && g.data("perfect-scrollbar-update")(), g;
			if ("destroy" === H) return g.data("perfect-scrollbar-destroy") && g.data("perfect-scrollbar-destroy")(), g;
			if (g.data("perfect-scrollbar")) return g.data("perfect-scrollbar");
			g.addClass("ps-container");
			var b, ee, te, ae, oe, ie, ne, re, se, le, de, pe, ce, me, ue = "rtl" === g.css("direction"),
				ge = (ce = Z++, function(a) {
					var t = ".perfect-scrollbar-" + ce;
					return void 0 === a ? t : a + t
				}),
				_e = this.ownerDocument || document,
				D = J("<div class='ps-scrollbar-x-rail'>").appendTo(g),
				fe = J("<div class='ps-scrollbar-x'>").appendTo(D),
				he = Q(D.css("bottom")),
				be = he == he,
				ve = be ? null : Q(D.css("top")),
				ye = Q(D.css("borderLeftWidth")) + Q(D.css("borderRightWidth")),
				M = Q(D.css("marginLeft")) + Q(D.css("marginRight")),
				E = J("<div class='ps-scrollbar-y-rail'>").appendTo(g),
				Te = J("<div class='ps-scrollbar-y'>").appendTo(E),
				xe = Q(E.css("right")),
				we = xe == xe,
				Ce = we ? null : Q(E.css("left")),
				ke = Q(E.css("borderTopWidth")) + Q(E.css("borderBottomWidth")),
				V = Q(E.css("marginTop")) + Q(E.css("marginBottom")),
				U = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
				Y = null !== window.navigator.msMaxTouchPoints;
			return K(), g.bind(ge("scroll"), function() {
				K()
			}), t(), e(), Te.bind(ge("click"), o), E.bind(ge("click"), function(a) {
				var t = Q(le / 2),
					e = (a.pageY - E.offset().top - t) / (ee - le);
				0 > e ? e = 0 : 1 < e && (e = 1), g.scrollTop((ae - ee) * e)
			}), fe.bind(ge("click"), o), D.bind(ge("click"), function(a) {
				var t = Q(ie / 2),
					e = (a.pageX - D.offset().left - t) / (b - ie);
				0 > e ? e = 0 : 1 < e && (e = 1), g.scrollLeft((te - b) * e)
			}), s(), i(), (U || Y) && n(U, Y), l.useKeyboard && (me = !1, g.bind(ge("mouseenter"), function() {
				me = !0
			}), g.bind(ge("mouseleave"), function() {
				me = !1
			}), J(_e).bind(ge("keydown"), function(a) {
				if ((!a.isDefaultPrevented || !a.isDefaultPrevented()) && me) {
					for (var t = document.activeElement ? document.activeElement : _e.activeElement; t.shadowRoot;) t = t.shadowRoot.activeElement;
					if (!J(t).is(":input,[contenteditable]")) {
						var o = 0,
							n = 0;
						switch (a.which) {
							case 37:
								o = -30;
								break;
							case 38:
								n = 30;
								break;
							case 39:
								o = 30;
								break;
							case 40:
								n = -30;
								break;
							case 33:
								n = 90;
								break;
							case 32:
							case 34:
								n = -90;
								break;
							case 35:
								n = a.ctrlKey ? -ae : -ee;
								break;
							case 36:
								n = a.ctrlKey ? g.scrollTop() : ee;
								break;
							default:
								return;
						}
						g.scrollTop(g.scrollTop() - n), g.scrollLeft(g.scrollLeft() + o), _(o, n) && a.preventDefault()
					}
				}
			})), g.data("perfect-scrollbar", g), g.data("perfect-scrollbar-update", K), g.data("perfect-scrollbar-destroy", r), g
		})
	}
}),
function(d) {
	d.fn.hoverIntent = function(p, t, e) {
		function m(e) {
			l = e.pageX, u = e.pageY
		}

		function i(e) {
			var a = d.extend({}, e),
				o = this;
			o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === e.type ? (g = a.pageX, _ = a.pageY, d(o).on("mousemove.hoverIntent", m), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function() {
				h(a, o)
			}, f.interval))) : (d(o).off("mousemove.hoverIntent", m), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function() {
				var i, n;
				i = a, (n = o).hoverIntent_t = clearTimeout(n.hoverIntent_t), n.hoverIntent_s = !1, f.out.apply(n, [i])
			}, f.timeout)))
		}
		var l, u, g, _, f = {
				interval: 100,
				sensitivity: 6,
				timeout: 0
			};
		f = "object" == typeof p ? d.extend(f, p) : d.isFunction(t) ? d.extend(f, {
			over: p,
			out: t,
			selector: e
		}) : d.extend(f, {
			over: p,
			out: p,
			selector: t
		});
		var h = function(a, t) {
			return (t.hoverIntent_t = clearTimeout(t.hoverIntent_t), Math.sqrt((g - l) * (g - l) + (_ - u) * (_ - u)) < f.sensitivity) ? (d(t).off("mousemove.hoverIntent", m), t.hoverIntent_s = !0, f.over.apply(t, [a])) : void(g = l, _ = u, t.hoverIntent_t = setTimeout(function() {
				h(a, t)
			}, f.interval))
		};
		return this.on({
			"mouseenter.hoverIntent": i,
			"mouseleave.hoverIntent": i
		}, f.selector)
	}
}(jQuery),
function(a) {
	var o = function(a, t, e) {
		return 1 === arguments.length ? o.get(a) : o.set(a, t, e)
	};
	o._document = document, o._navigator = navigator, o.defaults = {
		path: "/"
	}, o.get = function(e) {
		return o._cachedDocumentCookie !== o._document.cookie && o._renewCache(), o._cache[e]
	}, o.set = function(n, t, e) {
		return (e = o._getExtendedOptions(e)).expires = o._getExpiresDate(t === a ? -1 : e.expires), o._document.cookie = o._generateCookieString(n, t, e), o
	}, o.expire = function(i, t) {
		return o.set(i, a, t)
	}, o._getExtendedOptions = function(e) {
		return {
			path: e && e.path || o.defaults.path,
			domain: e && e.domain || o.defaults.domain,
			expires: e && e.expires || o.defaults.expires,
			secure: e && e.secure !== a ? e.secure : o.defaults.secure
		}
	}, o._isValidDate = function(e) {
		return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
	}, o._getExpiresDate = function(a, i) {
		switch (i = i || new Date, typeof a) {
			case "number":
				a = new Date(i.getTime() + 1e3 * a);
				break;
			case "string":
				a = new Date(a);
		}
		if (a && !o._isValidDate(a)) throw Error("`expires` parameter cannot be converted to a valid Date instance");
		return a
	}, o._generateCookieString = function(a, o, n) {
		return a = (a = (a = a.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent)) + ((n = n || {}).path ? ";path=" + n.path : ""), a += n.domain ? ";domain=" + n.domain : "", (a += n.expires ? ";expires=" + n.expires.toUTCString() : "") + (n.secure ? ";secure" : "")
	}, o._getCookieObjectFromString = function(n) {
		var r = {};
		n = n ? n.split("; ") : [];
		for (var e, l = 0; l < n.length; l++) e = o._getKeyValuePairFromCookieString(n[l]), r[e.key] === a && (r[e.key] = e.value);
		return r
	}, o._getKeyValuePairFromCookieString = function(a) {
		var t = 0 > (t = a.indexOf("=")) ? a.length : t;
		return {
			key: decodeURIComponent(a.substr(0, t)),
			value: decodeURIComponent(a.substr(t + 1))
		}
	}, o._renewCache = function() {
		o._cache = o._getCookieObjectFromString(o._document.cookie), o._cachedDocumentCookie = o._document.cookie
	}, o._areEnabled = function() {
		var e = "1" === o.set("cookies.js", 1).get("cookies.js");
		return o.expire("cookies.js"), e
	}, o.enabled = o._areEnabled(), "function" == typeof define && define.amd ? define(function() {
		return o
	}) : "undefined" == typeof exports ? window.Cookies = o : ("undefined" != typeof module && module.exports && (exports = module.exports = o), exports.Cookies = o)
}(),
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, e.lozad = t())
}(this, function() {
	'use strict';

	function e(e) {
		e.setAttribute("data-loaded", !0)
	}
	var t = "undefined" != typeof document && document.documentMode,
		a = {
			rootMargin: "0px",
			threshold: 0,
			load: function(e) {
				if ("picture" === e.nodeName.toLowerCase()) {
					var a = document.createElement("img");
					t && e.getAttribute("data-iesrc") && (a.src = e.getAttribute("data-iesrc")), e.getAttribute("data-alt") && (a.alt = e.getAttribute("data-alt")), e.append(a)
				}
				if ("video" === e.nodeName.toLowerCase() && !e.getAttribute("data-src") && e.children) {
					for (var o = e.children, n = void 0, r = 0; r <= o.length - 1; r++) n = o[r].getAttribute("data-src"), n && (o[r].src = n);
					e.load()
				}
				if (e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")), e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")), e.getAttribute("data-background-image")) e.style.backgroundImage = "url('" + e.getAttribute("data-background-image").split(",").join("'),url('") + "')";
				else if (e.getAttribute("data-background-image-set")) {
					var s = e.getAttribute("data-background-image-set").split(","),
						l = s[0].substr(0, s[0].indexOf(" ")) || s[0];
					l = -1 === l.indexOf("url(") ? "url(" + l + ")" : l, 1 === s.length ? e.style.backgroundImage = l : e.setAttribute("style", (e.getAttribute("style") || "") + ("background-image: " + l + "; background-image: -webkit-image-set(" + s + "); background-image: image-set(" + s + ")"))
				}
				e.getAttribute("data-toggle-class") && e.classList.toggle(e.getAttribute("data-toggle-class"))
			},
			loaded: function() {}
		}, o = function(e) {
			return "true" === e.getAttribute("data-loaded")
		}, i = function(t, a) {
			return function(i, n) {
				i.forEach(function(i) {
					(0 < i.intersectionRatio || i.isIntersecting) && (n.unobserve(i.target), !o(i.target) && (t(i.target), e(i.target), a(i.target)))
				})
			}
		}, n = function(e) {
			var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : document;
			return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e)
		};
	return function() {
		var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
			r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = Object.assign({}, a, r),
			l = s.root,
			d = s.rootMargin,
			p = s.threshold,
			c = s.load,
			m = s.loaded,
			u = void 0;
		return "undefined" != typeof window && window.IntersectionObserver && (u = new IntersectionObserver(i(c, m), {
			root: l,
			rootMargin: d,
			threshold: p
		})), {
			observe: function() {
				for (var a = n(t, l), r = 0; r < a.length; r++)
					if (!o(a[r])) {
						if (u) {
							u.observe(a[r]);
							continue
						}
						c(a[r]), e(a[r]), m(a[r])
					}
			},
			triggerLoad: function(t) {
				o(t) || (c(t), e(t), m(t))
			},
			observer: u
		}
	}
});

//禁用右键及F12
window.document.oncontextmenu = function(){ 			
	return false;	
} 
document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        e.returnValue = false;
        return (false);
    }
}
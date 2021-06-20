
$(document).ready(function(){

	$('#scroll-up').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	var controller = new ScrollMagic.Controller();

/*
	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);
*/

/*
	$('.anim-me').each(function(){
		var anim_me_scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.9
		})
		.setClassToggle(this, 'anim-in')
		.addTo(controller);
	});
*/
	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.bcg', 2, {y: '-20%', ease:Power0.easeNone}, 0);
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);


	$('.anim-me').each(function(){
		var data_trigger=$(this).attr('data-trigger');
		if (data_trigger==''){
			data_trigger=this;
		}
		var ourScene = new ScrollMagic.Scene({
			triggerElement: data_trigger,
			triggerHook: 0.8
		})
		.setClassToggle(this, 'anim-in') // add class to project01
		.addTo(controller);
	});

	/* INTRO */

		var scene_intro_scroll = new ScrollMagic.Scene({
			triggerElement: '#section-01',
			triggerHook: 0.8
		})
		.setClassToggle('#scroll-down', 'anim-out') // add class to project01
		.addTo(controller);

		var scene_intro_scroll = new ScrollMagic.Scene({
			triggerElement: '#section-01',
			triggerHook: 0.8
		})
		.setClassToggle('#scroll-up', 'anim-in') // add class to project01
		.addTo(controller);


		$('#intro .word').click(function(){
			$('#title-text').fadeOut(200,function(){
				$('#intro .word').each(function(){
					$(this).fadeOut(10).fadeIn(200);
				});
				$(this).fadeIn(200);
			});
		});


	/* SECTION 1 - doubt */
		var scene_01a = new ScrollMagic.Scene({
			triggerElement: '#section-1-title',
			triggerHook: .8
		})
		.setClassToggle('#section-1-title','anim-in')
		.addTo(controller);
		var scene_01b = new ScrollMagic.Scene({
			triggerElement: '#section-01',
			triggerHook: .2,
		})
		.setClassToggle('#section-1-title','anim-out')
		.addTo(controller);


		var scene_01b = new ScrollMagic.Scene({
			triggerElement: '#section-01',
			triggerHook: .3,
		})
		.setClassToggle('#section-01 .anim-fade','anim-in')
		.addTo(controller);


		var scene_01c = new ScrollMagic.Scene({
			triggerElement: '#section-01 .section-content',
			triggerHook: .6
		})
		.setClassToggle('#section-01 .text-left','anim-in')
		.addTo(controller);

		var scene_01d = new ScrollMagic.Scene({
			triggerElement: '#section-01 .section-content',
			triggerHook: .6
		})
		.setClassToggle('#section-01 .text-right','anim-in')
		.addTo(controller);


		/* Broken Bulb animation */
				var images = [
					"img/lightbulb-on.png",
					"img/lightbulb-broken.png"
				];
				var obj = {curImg: 0};
				var section1_img_tween = TweenMax.to(obj, 0.5,
					{
						curImg: images.length - 1,
						roundProps: "curImg",
						repeat: 0,
						immediateRender: true,
						ease: Linear.easeNone,
						onUpdate: function () {
						  $('#section-01 img.responsive').attr("src", images[obj.curImg]); // set the image source
						}
					}
				);
				var scene = new ScrollMagic.Scene({triggerElement: "#section-01-content-complete", duration: 300})
								.setTween(section1_img_tween)
								.addTo(controller);

				var scene_01b = new ScrollMagic.Scene({
					triggerElement: '#section-01 .section-content',
					triggerHook: .1,
				})
				.setTween(section1_img_tween)
				.addTo(controller);


				var scene_01e = new ScrollMagic.Scene({
					triggerElement: '#section-01 .stripes',
					triggerHook: .6
				})
				.setClassToggle('#section-01 .stripes .stripe','anim-in')
				.addTo(controller);



	/* SECTION 2 - planets */

/*
		var pintSection2 = new ScrollMagic.Scene({
			triggerElement: '#section-02',
			triggerHook: 0,
			duration: '120%'
		})
		.setPin('#section-02', {pushFollowers: false})
		.addTo(controller);
*/
		var parallaxTlH2a = new TimelineMax();
		parallaxTlH2a
			.from('.bcg-h-parrallax .bcg', 2, {x: '-30%', ease:Power0.easeNone}, 0);
		var slideParallaxSceneH = new ScrollMagic.Scene({
			triggerElement: '.bcg-h-parrallax',
			triggerHook: 1,
			duration: '200%'
		})
		.setTween(parallaxTlH2a)
		.addTo(controller);

		var parallaxTlH2b = new TimelineMax();
		parallaxTlH2b
			.from('.bcg-h-parrallax .bcg2', 2, {x: '-40%', ease:Power0.easeNone}, 0);
		var slideParallaxSceneH = new ScrollMagic.Scene({
			triggerElement: '.bcg-h-parrallax',
			triggerHook: 1,
			duration: '200%'
		})
		.setTween(parallaxTlH2b)
		.addTo(controller);



		var flightpath2a = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: -50,	y: 100}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
					{x: 250,	y: 100},
					{x: $(window).width()/2,	y: 100},
					{x: $(window).width()/4,	y: 100},
					{x: $(window).width() + 300,	y: 100}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
					{x: $(window).width() + 300,	y: 200}
					]
			}
		};
		// create tween
		var tween2a = new TimelineMax()
			.add(TweenMax.to($("#section-02-mars"), 1.2, {css:{bezier:flightpath2a.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#section-02-mars"), 2, {css:{bezier:flightpath2a.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#section-02-mars"), 1, {css:{bezier:flightpath2a.leave}, ease:Power1.easeInOut}));

		// build scene
		var section2path1 = new ScrollMagic.Scene({triggerElement: "#section-02", duration: 1000, offset: 100})
						.setPin("#section-02-mars")
						.setTween(tween2a)
						.addTo(controller);



			var flightpath2b = {
				entry : {
					curviness: 1.25,
					autoRotate: true,
					values: [
							{x: -50,	y: 0},
							{x: -50,	y: 0}
						]
				},
				looping : {
					curviness: 1.25,
					autoRotate: true,
					values: [
						{x: $(window).width()*.7,	y: 0},
						{x: $(window).width()*.5,	y: 0},
						{x: $(window).width() + 300,	y: 0}
						]
				},
				leave : {
					curviness: 1.25,
					autoRotate: true,
					values: [
						{x: $(window).width() + 300,	y: 0},
						{x: $(window).width() + 300,	y: 0}
						]
				}
			};
			// create tween
			var tween2b = new TimelineMax()
				.add(TweenMax.to($("#section-02-venus"), 1.2, {css:{bezier:flightpath2b.entry}, ease:Power1.easeInOut}))
				.add(TweenMax.to($("#section-02-venus"), 2, {css:{bezier:flightpath2b.looping}, ease:Power1.easeInOut}))
				.add(TweenMax.to($("#section-02-venus"), 1, {css:{bezier:flightpath2b.leave}, ease:Power1.easeInOut}));

			// build scene
			var section2path2 = new ScrollMagic.Scene({triggerElement: "#section-02", duration: 1100, offset: 200})
							.setPin("#section-02-venus")
							.setTween(tween2b)
							.addTo(controller);
			/* SECTION 3 - Solids */
			/*
				var scene_intro_scroll = new ScrollMagic.Scene({
					triggerElement: '#section-03 .section-content',
					triggerHook: 1
				})
				.setClassToggle('#section-03 .perfect-solids', 'anim-in')
				.addTo(controller);
				*/
/* SECTION 4 - Book */
			var parallaxTl4a = new TimelineMax();
			parallaxTl4a
				.from('#section-4-bg-1 .bg', 2, {y: '-50%', ease:Power0.easeNone}, 0);
			var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement: '#section-4-bg-1',
				triggerHook: 1,
				duration: '150%'
			})
			.setTween(parallaxTl4a)
			.addTo(controller);

			var parallaxTl4b = new TimelineMax();
			parallaxTl4b
				.from('#section-4-bg-2 .bg', 2, {x: '-20%', ease:Power0.easeNone}, 0);
			var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement: '#section-4-bg-2',
				triggerHook: 1,
				duration: '150%'
			})
			.setTween(parallaxTl4b)
			.addTo(controller);

			var scene_04stripes = new ScrollMagic.Scene({
				triggerElement: '#section-04 .stripes',
				triggerHook: .6
			})
			.setClassToggle('#section-04 .stripes .stripe','anim-in')
			.addTo(controller);

/* SECTION 6 */
					var tween6a = new TimelineMax()
						.add(TweenMax.to($("#section-6-moose"), 1, {left:'-20vw', ease:Power1.easeInOut}))
						.add(TweenMax.to($("#section-6-moose"), 3, {left:'120vw', ease:Power1.easeInOut}));

					var tween6aScene = new ScrollMagic.Scene({triggerElement: "#section-06 .section-content-end", duration: 1000, offset: 0})
									.setTween(tween6a)
									.addTo(controller);


					var tween6b = new TimelineMax()
						.add(TweenMax.to($("#brahe-glasses"), 1, {top:'-20%', opacity:0, ease:Power1.easeInOut}))
						.add(TweenMax.to($("#brahe-glasses"), 3, {top:'0', opacity:1, ease:Power1.easeInOut}));

					var tween6aScene = new ScrollMagic.Scene({triggerElement: "#section-06", duration: 250, offset: 0})
									.setTween(tween6b)
									.addTo(controller);

					var tween6c = new TimelineMax()
						.add(TweenMax.to($("#brahe-nose"), 1, {top:'0', opacity:1, ease:Power1.easeInOut}))
						.add(TweenMax.to($("#brahe-nose"), 3, {top:'50%', opacity:0, ease:Power1.easeInOut}));

					var tween6aScene = new ScrollMagic.Scene({triggerElement: "#section-06", duration: 250, offset: 250})
									.setTween(tween6c)
									.addTo(controller);
/* SECTION 8 */

					var scene_01a = new ScrollMagic.Scene({
						triggerElement: '#section-08 .trigger3',
						triggerHook: .8
					})
					.setClassToggle('#section-08 .bg2','anim-in')
					.addTo(controller);

					var scene_01a = new ScrollMagic.Scene({
						triggerElement: '#section-08 .trigger5',
						triggerHook: .8
					})
					.setClassToggle('#section-08 .bg3','anim-in')
					.addTo(controller);

/* SECTIONS 9 & 10 */
	// pin section 9
					var pinScene9 = new ScrollMagic.Scene({
						triggerElement: '#section-09',
						triggerHook: 0,
						duration: '150%'
					})
					.setPin('#section-09', {pushFollowers: false})
					.addTo(controller);

					var pinScene10 = new ScrollMagic.Scene({
						triggerElement: '#section-10',
						triggerHook: 0,
						duration: '150%'
					})
					.setPin('#section-10', {pushFollowers: false})
					.addTo(controller);

					$('.anim-me-late').each(function(){
						var anim_me_scene9 = new ScrollMagic.Scene({
							triggerElement: '#section-09',
							triggerHook: 0.5
						})
						.setClassToggle(this, 'anim-in')
						.addTo(controller);
					});

					$('.anim-me-late').each(function(){
						var anim_me_scene10 = new ScrollMagic.Scene({
							triggerElement: '#section-10 .section-content-end',
							triggerHook: .9
						})
						.setClassToggle(this, 'anim-in')
						.addTo(controller);
					});

/* SECTION 11 */
/*
		var parallaxTl = new TimelineMax();
		parallaxTl
			.from('#bcg-11', 2, {y: '-100%', ease:Power0.easeNone}, 0);
		var slideParallaxScene = new ScrollMagic.Scene({
			triggerElement: '#bcg-parrallax-11',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(parallaxTl)
		.addTo(controller);
*/

		var scene_11a = new ScrollMagic.Scene({
			triggerElement: '#section-11 .anim-me-special.anim-from-left',
			triggerHook: .8
		})
		.setClassToggle('#section-11 .anim-me-special.anim-from-left','anim-in')
		.addTo(controller);
		var scene_11b = new ScrollMagic.Scene({
			triggerElement: '#section-11 .anim-me-special.anim-from-right',
			triggerHook: .8
		})
		.setClassToggle('#section-11 .anim-me-special.anim-from-right','anim-in')
		.addTo(controller);

		var scene_11c = new ScrollMagic.Scene({
			triggerElement: '#section-11 .bg',
			triggerHook: .8
		})
		.setClassToggle('#section-11 .bg','anim-in')
		.addTo(controller);


/* SECTION 12 */
				var scene_01a = new ScrollMagic.Scene({
					triggerElement: '#section-12 .section-content',
					triggerHook: .8
				})
				.setClassToggle('#section-12 .img-container','anim-in')
				.addTo(controller);

/* SECTION 14 */
				var tween14a = new TimelineMax()
					.add(TweenMax.to($("#section-14 img"), 1, {left:'50vw', bottom:'0', ease:Power1.easeInOut}))
					.add(TweenMax.to($("#section-14 img"), 3, {left:'90vw', bottom:'60vh', ease:Power1.easeInOut}));

				var section14path1 = new ScrollMagic.Scene({triggerElement: "#section-14", duration: 1000, offset: 0})
								.setTween(tween14a)
								.addTo(controller);



				var parallaxTl14 = new TimelineMax();
				parallaxTl14
					.from('#section-14 .bcg', 2, {x: '-20%', ease:Power0.easeNone}, 0);
				var slideParallaxScene14 = new ScrollMagic.Scene({
					triggerElement: '#section-14',
					triggerHook: 1,
					duration: '100%'
				})
				.setTween(parallaxTl14)
				.addTo(controller);




});

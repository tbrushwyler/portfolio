ArticleAnimator.animatePage = function(callback) {
	var self = this;
	var translationValue = this.$next.get(0).getBoundingClientRect().top;
	this.canScroll = false;

	this.$current.addClass('fade-up-out');

	this.$next.removeClass('content-hidden next')
		.addClass('easing-upward')
		.css({"transform": "translate3d(0, -" + translationValue + "px, 0)"});

	setTimeout(function() {
		scrollTop();
		self.$next.removeClass('easing-upward');
		self.$current.remove();

		self.$next.css({"transform": ""});
		self.$current = self.$next.addClass('current');

		self.canScroll = true;
		self.currentPostIndex = self.nextPostIndex(self.currentPostIndex);

		callback();
	}, self.animationDuration + 300);
}
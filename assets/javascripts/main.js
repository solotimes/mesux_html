(function( window,$,undefined ) {
	
})(window,$)

window.Geffect={
	blackMask:{
				target:$('.blackMask ul li'),
				action:'hover',
				init:function(){
						//var thisObj=this;
						//console.log(thisObj.action);
						this.target.hover(function(){
							$(this).find('.alphaBlack').stop(true,true).fadeOut(100);
							$(this).find('span').stop(true,true).slideUp(300);
							$(this).find('a').css('border-color','#e1e1e1');
							//$(this).find('a img').stop(true,true).animate({height:'137px',width:'206px'},300);
						},function(){
							$(this).find('.alphaBlack').stop(true,true).fadeIn(100);
							$(this).find('span').stop(true,true).slideDown(300);
							$(this).find('a').css('border-color','#000000');
							//$(this).find('a img').stop(true,true).animate({height:'135px',width:'204px'},300);
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	homeKv:{
				target:$('.homeKv ul li'),
				action:'click',
				init:function(){
						var thisObj=this;
						//console.log(this.target);
						this.target.click(function(){
							$(this).fadeOut();
							var nth=thisObj.target.length;
							var now=thisObj.target.index($(this));
							//console.log(nth,now);
							if(now<nth-1){
								thisObj.target.eq(now+1).fadeIn();
							}
							else{
								thisObj.target.eq(0).fadeIn();	
							}
						})
					},
				stop:function(){
					this.target.unbind(this.action);
					}
				
			},
	navflaot:{
				target:$('.navfloat .mainNav li'),
				action:'mouseenter',
				init:function(){
						var thisObj=this;
						//var $current=$('.navfloat ul li.current');
						//curLeft=$current.position().left;
						
						
						this.target.mouseenter(function(){
								var	tempLeft=$(this).position().left;
								var	thisWidth=parseInt($(this).css('width'))+40;
								
								var nowLeft=tempLeft+thisWidth/2-78;
								//console.log(tempLeft,thisWidth,nowLeft);
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
						this.target.parent().mouseleave(function(){
								var	tempLeft=thisObj.target.filter('.current').position().left;
								var	thisWidth=parseInt(thisObj.target.filter('.current').css('width'))+40;
								var nowLeft=tempLeft+thisWidth/2-78;
								$('.navfloat ul .currentNav01').stop(true,true).animate({'left':nowLeft+'px'},300);
								$('.navfloat ul .currentNav02').stop(true,true).animate({'left':nowLeft+'px'},300);
							});
					},
				stop:function(){
					this.target.unbind('mouseenter');
					this.target.parent().unbind('mouseleave');
					}
			},
	siendao:{
				target:$('.siendao'),
				action:'hover',
				init:function(){
						var thisObj=this;
						this.target.hover(function(){
								$(this).children('.siendaoMenu').stop(true,true).slideDown(1500,'easeOutQuint');
								
							},function(){
								$(this).children('.siendaoMenu').stop(true,true).slideUp(1500,'easeOutQuint');
								
							});
					
					},
				stop:function(){
					this.target.unbind(this.action);
					}
			},
	musicAction:{
				target:$('.musicAction'),
				action:'click',
				init:function(){
						this.target.toggle(function(){
							$(this).html('Music off');
							$('.jp-play').click();
						},function(){
							$(this).html('Music on');
							$('.jp-stop').click();
						});
					},
				stop:function(){
					this.target.unbind(this.action);
					$('.jp-stop').click();
					}
			},
	brandHover:{
				target:$('.brandHover'),
				action:'hover',
				init:function(){
					this.target.hover(function(){
							//console.log($(this));
							var textID=$(this).attr('ehref');
							$(this).find('span').stop(true,true).slideUp(300);
							$('.brandText ul li').stop(true,true).fadeOut();
							$(textID).fadeIn(100);
						},function(){
							$(this).find('span').stop(true,true).slideDown(300);
						});
					},
				stop:function(){
						this.target.unbind(this.action);
					}
		
			},
	secondNav:{
				target:$('.mainNav'),
				action:'hover',
				init:function(){
					
					this.target.mouseenter(function(e){
								$('.secondNav').stop(true,true).slideDown(2000,'easeOutQuint');
							
						})
						
					$('.nav').mouseleave(function(){
								$('.secondNav').stop(true,true).slideUp(2000,'easeOutQuint');
							
						});
					
					},
				
				stop:function(){
						this.target.unbind(this.action);
						$('.nav').unbind('mouseleave');
					}
		
			},
	//imagepage
	leftSeason:{
				target:$('.leftSeason ul'),
				action:'hover',
				init:function(){
					this.target.find('li').animate({'bottom':'0px','opacity':'0'},200,'easeOutBounce');
					this.target.find('li').eq(0).animate({'opacity':'1'});
					var lock=false;
					
					this.target.mouseenter(function(){
							
							//console.log(1,lock);
							$(this).find('li').each(function(index,element){
								if(!lock){
									//$(this).fadeIn({duration:1000,queue:false});
									$(this).stop(false,false).animate({'bottom':24*index+'px','opacity':'1'},2000,'easeOutBounce');
								}
							});
						});
					this.target.mouseleave(function(){
							$(this).find('li').each(function(index,element){
								if(!lock){
									if(!$(this).hasClass('selected')){
										//$(this).fadeOut({duration:2000,queue:false});
										$(this).stop(false,false).animate({'bottom':0+'px','opacity':'0'},2000,'easeOutBounce');
									}
									else{
										$(this).stop(false,false).animate({'bottom':0+'px'},2000,'easeOutBounce');	
									}
								}
							});
						
						});
					this.target.find('li').click(function(){
							if(!lock){
								lock=true;
								$(this).siblings().removeClass('selected');
								$(this).addClass('selected');
								$(this).siblings().each(function(){
									$(this).stop(true,true).animate({'bottom':0+'px','opacity':'0'},2000,'easeOutBounce');
								});
								$(this).stop(true,true).animate({'bottom':0+'px'},2000,'easeOutBounce',function(){lock=false});
								return false;
							}
						});
					
					},
				stop:function(){
					this.target.find('li').each(function(index,element){
							$(this).css({'bottom':24*index+'px','opacity':'1'});
							$(this).unbind('click');
						});
					this.target.unbind('mouseleave');
					this.target.unbind('mouseenter');
					}
		
			},
	imageGallery:{
				target:$('.imageGallery'),
				action:'hover',
				init:function(){
					var galleryXX,galleryYY
					
					this.target.find('.listMask').mousemove(function(e){
						//console.log(1);
						var windowXX = e.originalEvent.x || e.originalEvent.layerX || 0; 
						var windowYY = e.originalEvent.y || e.originalEvent.layerY || 0;
						
						
						
						
						//console.log(galleryXX,galleryYY);
						
					})
						
				},
				
				stop:function(){
					this.target.unbind(this.action);
					this.target.find('.listMask').unbind('mouseover');
					}
			},
	
	
	
	//store
	storeGallery:{
				target:$('.storeInCity ul li'),
				action:'click',
				init:function(){
					this.target.click(function(){
						$('.store .storeImage img').fadeOut('fast').attr('src',$(this).attr('data-image')).fadeIn('fast');
						return false;
					});
						
				},
				
				stop:function(){
					this.target.unbind(this.action);
					
					}
		
			},
			
			
	
	initAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].init!=undefined){
						this[i].init();
					}
				}
			},
	stopAll:function(){
				for(var i in this){
					//console.log(i+':'+this[i].init);
					if(this[i].stop!=undefined){
						this[i].stop();
					}
				}
		
			}
};

$(document).ready(function(){
	
	Geffect.initAll();
});
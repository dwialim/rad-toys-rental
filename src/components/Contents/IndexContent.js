import React from 'react';
import apro101		from './../../assets/images/apro101-1-270x350.jpg'
import apro1211	from './../../assets/images/apro1211-2-270x350.jpg'
import apro13		from './../../assets/images/apro13-1-270x350.jpg'
import apro41		from './../../assets/images/apro41-1-270x350.jpg'
import apro71		from './../../assets/images/apro71-1-270x350.jpg'
import apro151		from './../../assets/images/apro151-1-270x350.jpg'
import apro161		from './../../assets/images/apro161-1-270x350.jpg'
import apro171		from './../../assets/images/apro171-1-270x350.jpg'
import apro181		from './../../assets/images/apro181-2-270x350.jpg'
import apro201		from './../../assets/images/apro201-1-270x350.jpg'
import apro302		from './../../assets/images/apro302-270x350.jpg'
import apro51012	from './../../assets/images/apro51012-1-270x350.jpg'
import avatar1		from './../../assets/images/avatar1.png'
import avatar2		from './../../assets/images/avatar2.png'
import avatar3		from './../../assets/images/avatar3.png'
import banner31	from './../../assets/images/banner31.jpg'
import banner32	from './../../assets/images/banner32.jpg'
import banner33	from './../../assets/images/banner33.jpg'
import blogpost1	from './../../assets/images/blogpost1-370x330.jpg'
import blogpost2	from './../../assets/images/blogpost2-370x330.jpg'
import blogpost4	from './../../assets/images/blogpost4-370x330.jpg'
import blogpost5	from './../../assets/images/blogpost5-370x330.jpg'
import blogpost9	from './../../assets/images/blogpost9-370x330.jpg'
import insta1		from './../../assets/images/insta1.jpg'
import insta2		from './../../assets/images/insta2.jpg'
import insta3		from './../../assets/images/insta3.jpg'
import insta4		from './../../assets/images/insta4.jpg'
import insta5		from './../../assets/images/insta5.jpg'
import insta6		from './../../assets/images/insta6.jpg'
import insta7		from './../../assets/images/insta7.jpg'
import insta8		from './../../assets/images/insta8.jpg'
import slide31 	from './../../assets/images/slide31.jpg'
import slide32		from './../../assets/images/slide32.jpg'
import slide33		from './../../assets/images/slide33.jpg'
// import apro600 from './../assets/images/apro201-1-600x778.jpg'
// import apro1113 from './../assets/images/apro1113-600x778.jpg'
// import en from './../assets/images/en.png'
// import it from './../assets/images/it.png'
// import logo from './../assets/images/logo.png'
// import radtoys from './../assets/images/rad-toys.png'
// import selarrow from './../assets/images/select-arrow.png'
// import blog from './../assets/images/blog-bg.jpg'
// import demo001 from './../assets/images/demo001.jpg'
// import demo002 from './../assets/images/demo002.jpg'
// import demo003 from './../assets/images/demo003.jpg'
// import demo004 from './../assets/images/demo004.jpg'
// import demo005 from './../assets/images/demo005.jpg'
// import demo006 from './../assets/images/demo006.jpg'

const IndexContent = () => {
	return (
		<div className="fullwidth-template">
			<div className="slide-home-03">
				<div className="response-product product-list-owl owl-slick equal-container better-height"
					data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:0,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:1,&quot;rows&quot;:1}"
					data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}}]">
					<div className="slide-wrap">
						<img src={slide31} alt="slide31" className="slide31" />
						<div className="slide-info">
							<div className="container">
								<div className="slide-inner">
									<h1>Summer Sale</h1>
									<h5>Code: <strong>KODORY</strong> 25% off</h5>
									<h2>Accessories items! </h2>
									<a href="shop.html">Shop now</a>
								</div>
							</div>
						</div>
					</div>

					<div className="slide-wrap">
						<img src={slide32} alt="slide32" />
						<div className="slide-info">
							<div className="container">
								<div className="slide-inner">
									<h1>Spring Collection</h1>
									<h5>Code: <strong>KODORY</strong> 30% off</h5>
									<h2>New Arrivals</h2>
									<a href="shop.html">Shop now</a>
								</div>
							</div>
						</div>
					</div>

					<div className="slide-wrap">
						<img src={ slide33 } alt="slide33" />
						<div className="slide-info">
							<div className="container">
								<div className="slide-inner">
									<h1>Autumn Shop</h1>
									<h5>Code: <strong>KODORY</strong> 20% off</h5>
									<h2>Best Seller</h2>
									<a href="shop.html">Shop now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-017">
				<div className="row">
					<div className="col-md-12 col-lg-4">
						<div className="kodory-banner style-08 left-center">
							<div className="banner-inner">
								<figure className="banner-thumb">
									<img src={ banner31 } className="attachment-full size-full" alt="img" />
								</figure>
								<div className="banner-info ">
									<div className="banner-content">
										<div className="title-wrap">
											<h6 className="title">Best Seller</h6>
										</div>
										<div className="cate">
											Check out our your<br />
											kids collection now!
										</div>
										<div className="button-wrap">
											<a className="button" target="_self" href="shop.html"><span>Shop now</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12 col-lg-4">
						<div className="kodory-banner style-09 left-center">
							<div className="banner-inner">
								<figure className="banner-thumb">
									<img src={ banner32 } className="attachment-full size-full" alt="img" />
								</figure>
								<div className="banner-info ">
									<div className="banner-content">
										<div className="title-wrap">
											<div className="banner-label">
												End this weekend
											</div>
											<h6 className="title">
												Big Sale<br />
												75% Off
											</h6>
										</div>
										<div className="cate">
											Promo Code: <strong>KODORY</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12 col-lg-4">
						<div className="kodory-banner style-10 left-center">
							<div className="banner-inner">
								<figure className="banner-thumb">
									<img src={ banner33 } className="attachment-full size-full" alt="img" />
								</figure>
								<div className="banner-info ">
									<div className="banner-content">
										<div className="title-wrap">
											<h6 className="title">Lookbook</h6>
										</div>
										<div className="cate">
											New Kids Collections<br />
											Summer Lookbook
										</div>
										<div className="button-wrap">
											<a className="button" target="_self" href="shop.html"><span>Shop now</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-001 pb-0">
				<div className="container" id="our-products">
					<div className="kodory-heading style-01">
						<div className="heading-inner">
							<h3 className="title">Our Products <span></span></h3>
								<div className="subtitle">
									Browse our website for the items
								</div>
						</div>
					</div>

					<div className="kodory-products style-04">
						<div className="response-product product-list-grid row auto-clear equal-container better-height ">
							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-25 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-specials product_tag-light product_tag-sock first instock sale featured shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro151} alt="Modern Platinum" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onsale">
												<span className="number">-11%</span>
											</span>
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>

										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Modern Platinum</a>
										</h3>
										<span className="price">
											<del>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>89.00
												</span>
											</del>
											<ins>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>79.00
												</span>
											</ins>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}> Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-23 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-lamp product_cat-sofas product_tag-hat  instock shipping-taxable purchasable product-type-variable has-default-attributes">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro171}
												alt="Cute Girl Shirt" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>

										<form className="variations_form cart">
											<table className="variations">
												<tbody>
													<tr>
														<td className="value">
															<select title="box_style" data-attributetype="box_style"
																data-id="pa_color"
																className="attribute-select " name="attribute_pa_color"
																data-attribute_name="attribute_pa_color"
																data-show_option_none="yes">
																<option data-type="" data-pa_color="" value="">
																	Choose an option
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	style={{ background: '#ffe59e'}} value="pink"
																	className="attached enabled">Pink
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	data-pa_color="#a825ea" value="purple"
																	className="attached enabled">Purple
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	data-pa_color="#b6b8ba" value="red"
																	className="attached enabled">Red
																</option>
															</select>
															<div className="data-val attribute-pa_color" data-attributetype="box_style">
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#3155e2' }} data-value="blue">
																	</span>
																</label>
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#52b745' }} data-value="green">
																	</span>
																</label>
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#ffe59e' }} data-value="pink">
																	</span>
																</label>
															</div>
															<a className="reset_variations" href="/#"
																style={{ visibility: 'hidden' }}>Clear
															</a>
														</td>
													</tr>
												</tbody>
											</table>
										</form>

										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">
													Select options
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Cute Girl Shirt</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>105.00
											</span> –
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>110.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width:'0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-32 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-sofas product_tag-hat product_tag-sock last instock sale featured shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={ apro71 } alt="Kid Backpack" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onsale">
												<span className="number">-18%</span>
											</span>
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Kid Backpack</a>
										</h3>
										<span className="price">
											<del>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>109.00
												</span>
											</del> 
											<ins>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>89.00
												</span>
											</ins>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-20 product type-product status-publish has-post-thumbnail product_cat-light product_cat-new-arrivals product_cat-specials product_tag-table product_tag-hat product_tag-sock first instock sale featured shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro201}
												alt="Red Car" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onsale">
												<span className="number">-7%</span>
											</span>
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Red Car</a>
										</h3>
										<span className="price">
											<del>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>150.00
												</span>
											</del>
											<ins>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>139.00
												</span>
											</ins>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-36 product type-product status-publish has-post-thumbnail product_cat-table product_cat-bed product_tag-light product_tag-table product_tag-sock  instock sale shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={ apro51012 } alt="Dazzling Toys" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onsale"><span className="number">-21%</span></span>
											<span className="onnew"><span className="text">New</span></span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Dazzling Toys</a>
										</h3>
										<span className="price">
											<del>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>125.00
												</span>
											</del>
											<ins>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>99.00
												</span>
											</ins>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-49 product type-product status-publish has-post-thumbnail product_cat-light product_cat-bed product_cat-sofas product_tag-multi product_tag-lamp last instock shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={ apro302 } alt="Cute Shoes" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew"><span className="text">New</span></span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Cute Shoes</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>79.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-93 product type-product status-publish has-post-thumbnail product_cat-light product_cat-table product_cat-new-arrivals product_tag-table product_tag-sock first instock shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro13}
												alt="Hello Shirt" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Hello Shirt</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>109.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-28 product type-product status-publish has-post-thumbnail product_cat-light product_cat-chair product_cat-sofas product_tag-light product_tag-sock  instock sale featured shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive"
												src={apro1211}
												alt="Blue Shoes" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onsale">
												<span className="number">-14%</span>
											</span>
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Blue Shoes</a>
										</h3>
										<span className="price">
											<del>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>138.00
												</span>
											</del>
											<ins>
												<span className="kodory-Price-amount amount">
													<span className="kodory-Price-currencySymbol">$</span>119.00
												</span>
											</ins>
										</span>
										<div className="rating-wapper ">
											<div className="star-rating">
												<span style={{ width: '100%' }}>Rated
													<strong className="rating">5.00</strong> out of 5
												</span>
											</div>
											<span className="review">(1)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-22 product type-product status-publish has-post-thumbnail product_cat-table product_cat-bed product_cat-lamp product_tag-table product_tag-hat product_tag-sock last instock featured downloadable shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro181}
												alt="Soccer Shoes" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Soccer Shoes</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>98.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-30 product type-product status-publish has-post-thumbnail product_cat-light product_cat-bed product_cat-specials product_tag-light product_tag-table product_tag-sock first instock featured downloadable shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro101}
												alt="Penguin Hoodie" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Penguin Hoodie</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>60.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-35 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-new-arrivals product_cat-lamp product_tag-light product_tag-hat product_tag-sock  instock shipping-taxable purchasable product-type-simple">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={ apro41 }
												alt="Cute Shoes" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>
										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Cute Shoes</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>134.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>

							<div className="product-item best-selling style-04 rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-ts-6 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock last instock featured shipping-taxable purchasable product-type-variable has-default-attributes">
								<div className="product-inner tooltip-top tooltip-all-top">
									<div className="product-thumb">
										<a className="thumb-link" href="single-product.html">
											<img className="img-responsive" src={apro161}
												alt="Kid Backpack" width="270" height="350" />
										</a>
										<div className="flash">
											<span className="onnew">
												<span className="text">New</span>
											</span>
										</div>

										<form className="variations_form cart">
											<table className="variations">
												<tbody>
													<tr>
														<td className="value">
															<select title="box_style" data-attributetype="box_style"
																data-id="pa_color"
																className="attribute-select " name="attribute_pa_color"
																data-attribute_name="attribute_pa_color"
																data-show_option_none="yes">
																<option data-type="" data-pa_color="" value="">
																	Choose an option
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	style={{ background: '#3155e2' }} value="blue"
																	className="attached enabled">Blue
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	data-pa_color="#52b745" value="green"
																	className="attached enabled">Green
																</option>
																<option data-width="30" data-height="30" data-type="color"
																	style={{ background: '#ffe59e' }} value="pink"
																	className="attached enabled">Pink
																</option>
															</select>

															<div className="data-val attribute-pa_color"
																data-attributetype="box_style">
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#3155e2' }} data-value="blue">
																	</span>
																</label>
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#52b745' }} data-value="green">
																	</span>
																</label>
																<label>
																	<input type="radio" name="color" />
																	<span className="change-value color"
																		style={{ background: '#ffe59e' }} data-value="pink">
																	</span>
																</label>
															</div>
															<a className="reset_variations" href="/#"
																style={{ visibility: 'hidden' }}>Clear</a>
														</td>
													</tr>
												</tbody>
											</table>
										</form>

										<div className="group-button">
											<div className="add-to-cart">
												<a href="cart.html"
													className="button product_type_simple add_to_cart_button ajax_add_to_cart">Select options
												</a>
											</div>
											<a href="/#" className="button yith-wcqv-button">Quick View</a>
											<div className="kodory product compare-button">
												<a href="compare.html" className="compare button">Compare</a>
											</div>
											<div className="yith-wcwl-add-to-wishlist">
												<div className="yith-wcwl-add-button show">
													<a href="wishlist.html" className="add_to_wishlist">Add to Wishlist</a>
												</div>
											</div>
										</div>
									</div>

									<div className="product-info">
										<h3 className="product-name product_title">
											<a href="single-product.html">Kid Backpack</a>
										</h3>
										<span className="price">
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>45.00
											</span> –
											<span className="kodory-Price-amount amount">
												<span className="kodory-Price-currencySymbol">$</span>54.00
											</span>
										</span>
										<div className="rating-wapper nostar">
											<div className="star-rating">
												<span style={{ width: '0%' }}>Rated
													<strong className="rating">0</strong> out of 5
												</span>
											</div>
											<span className="review">(0)</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- OWL Products -->*/}
						<div className="shop-all">
							<a target=" _blank" href="shop.html">Discovery All</a>
						</div>
					</div>
				</div>
			</div>

			<div className="section-0181">
				<div className="container" id="testimonial">
					<div className="kodory-heading style-01">
						<div className="heading-inner">
							<h3 className="title">What's Clients Says?<span></span></h3>
							<div className="subtitle">
								Lore ipsum dolor sit amet consectetur
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-018">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="kodory-slide">
								<div className="owl-slick equal-container better-height"
									data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:0,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:1,&quot;vertical&quot;:false,&quot;verticalSwiping&quot;:false,&quot;rows&quot;:1}"
									data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;0&quot;}}]">
									<div className="kodory-testimonial style-01">
										<div className="testimonial-inner">
											<div className="thumb">
												<img src={ avatar1 }
													className="attachment-full size-full" alt="img" width="97"
													height="97" />
											</div>
											<p className="desc">Lore ipsum dolor sit amet consectetur elit sagittis,
												quisque ut integer penatibus eleifend erat porttitor,
												viverra tristique dapibus fermentum.
											</p>
											<div className="testimonial-info">
												<div className="intro">
													<h3 className="name">
														<a href="/#" target="_self" tabIndex="0">Charley Pratt</a>
													</h3>
													<div className="position">Customer</div>
												</div>
											</div>
										</div>
									</div>

									<div className="kodory-testimonial style-01">
										<div className="testimonial-inner">
											<div className="thumb">
												<img src={ avatar3 }
													className="attachment-full size-full" alt="img" width="97"
													height="97" />
											</div>
											<p className="desc">Lore ipsum dolor sit amet consectetur elit sagittis,
												quisque ut integer penatibus eleifend erat porttitor,
												viverra tristique dapibus fermentum.
											</p>
											<div className="testimonial-info">
												<div className="intro">
													<h3 className="name">
														<a href="/#" target="_self" tabIndex="-1">Nadia Pugh</a>
													</h3>
													<div className="position">Customer</div>
												</div>
											</div>
										</div>
									</div>

									<div className="kodory-testimonial style-01">
										<div className="testimonial-inner">
											<div className="thumb">
												<img src={ avatar2 }
													className="attachment-full size-full" alt="img" width="97"
													height="97" />
											</div>
											<p className="desc">Lore ipsum dolor sit amet consectetur elit sagittis,
												quisque ut integer penatibus eleifend erat porttitor,
												viverra tristique dapibus fermentum.
											</p>
											<div className="testimonial-info">
												<div className="intro">
													<h3 className="name">
														<a href="/#" target="_self" tabIndex="-1">Troy Bryant</a>
													</h3>
													<div className="position">Customer</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-001 pt-0">
				<div className="container">
					<div className="kodory-heading style-01">
						<div className="heading-inner">
							<h3 className="title">From Our Blog<span></span></h3>
							<div className="subtitle">Lore ipsum dolor sit amet consectetur</div>
						</div>
					</div>

					<div className="kodory-blog style-02">
						<div className="blog-list-owl owl-slick equal-container better-height"
							data-slick="{&quot;arrows&quot;:true,&quot;slidesMargin&quot;:30,&quot;dots&quot;:true,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:3,&quot;rows&quot;:1}"
							data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesMargin&quot;:&quot;10&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;20&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;30&quot;}}]">
							<article
								className="post-item post-grid rows-space-0 post-195 post type-post status-publish format-standard has-post-thumbnail hentry category-light category-table category-life-style tag-light tag-life-style">
								<div className="post-inner">
									<div className="post-thumb">
										<a href="single-post.html" tabIndex="0">
											<img src={ blogpost1 }
												className="img-responsive attachment-370x330 size-370x330" alt="img"
												width="370" height="330" />
										</a>
									</div>

									<div className="post-content">
										<div className="post-info">
											<div className="title-date">
												<h2 className="post-title">
													<a href="single-post.html" tabIndex="0">Not your ordinary multi service.</a>
												</h2>
											</div>
											<div className="post-meta">
												<div className="post-author">
													<a href="/#"> admin </a>
												</div>
												<div className="date">
													<a href="/#">January 03, 2021</a>
												</div>
											</div>
												Lore ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
												quisque litora dapibus primis lacinia
										</div>
									</div>
								</div>
							</article>

							<article
								className="post-item post-grid rows-space-0 post-192 post type-post status-publish format-standard has-post-thumbnail hentry category-light category-fashion category-multi category-life-style tag-light tag-fashion tag-multi">
								<div className="post-inner">
									<div className="post-thumb">
										<a href="single-post.html" tabIndex="0">
											<img src={ blogpost5 }
												className="img-responsive attachment-370x330 size-370x330" alt="img" width="370"
												height="330" />
										</a>
									</div>

									<div className="post-content">
										<div className="post-info">
											<div className="title-date">
												<h2 className="post-title">
													<a href="single-post.html" tabIndex="0">We bring you the best by working</a>
												</h2>
											</div>
											<div className="post-meta">
												<div className="post-author">
													<a href="/#"> admin </a>
												</div>
												<div className="date">
													<a href="/#">January 03, 2021</a>
												</div>
											</div>
												Lore ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
												quisque litora dapibus primis lacinia
										</div>
									</div>
								</div>
							</article>

							<article
								className="post-item post-grid rows-space-0 post-189 post type-post status-publish format-video has-post-thumbnail hentry category-table category-life-style tag-multi tag-life-style post_format-post-format-video">
								<div className="post-inner">
									<div className="post-thumb">
										<a href="single-post.html"
											tabIndex="0">
											<img src={ blogpost9 }
												className="img-responsive attachment-370x330 size-370x330" alt="img"
												width="370" height="330" />
										</a>
									</div>

									<div className="post-content">
										<div className="post-info">
											<div className="title-date">
												<h2 className="post-title">
													<a href="single-post.html" tabIndex="0">We design functional best multi</a>
												</h2>
											</div>
											<div className="post-meta">
												<div className="post-author">
													<a href="/#"> admin </a>
												</div>
												<div className="date">
													<a href="/#">January 03, 2021</a>
												</div>
											</div>
												Lore ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
												quisque litora dapibus primis lacinia
										</div>
									</div>
								</div>
							</article>

							<article
								className="post-item post-grid rows-space-0 post-186 post type-post status-publish format-standard has-post-thumbnail hentry category-light category-life-style tag-life-style">
								<div className="post-inner">
									<div className="post-thumb">
										<a href="single-post.html" tabIndex="-1">
											<img src={ blogpost4 }
												className="img-responsive attachment-370x330 size-370x330" alt="img" width="370"
												height="330" />
										</a>
									</div>

									<div className="post-content">
										<div className="post-info">
											<div className="title-date">
												<h2 className="post-title">
													<a href="single-post.html" tabIndex="-1">The child is swimming with a buoy</a>
												</h2>
											</div>
											<div className="post-meta">
												<div className="post-author">
													<a href="/#"> admin </a>
												</div>
												<div className="date">
													<a href="/#">January 03, 2021</a>
												</div>
											</div>
												Lore ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
												quisque litora dapibus primis lacinia
										</div>
									</div>
								</div>
							</article>

							<article
								className="post-item post-grid rows-space-0 post-183 post type-post status-publish format-standard has-post-thumbnail hentry category-light category-fashion tag-light tag-multi">
								<div className="post-inner">
									<div className="post-thumb">
										<a href="single-post.html" tabIndex="-1">
											<img src={ blogpost2 }
												className="img-responsive attachment-370x330 size-370x330" alt="img"
												width="370" height="330" /> </a>
									</div>

									<div className="post-content">
										<div className="post-info">
											<div className="title-date">
												<h2 className="post-title">
													<a href="single-post.html" tabIndex="-1">Collection hiding beside beige wall</a>
												</h2>
											</div>
											<div className="post-meta">
												<div className="post-author">
													<a href="/#"> admin </a>
												</div>
												<div className="date">
													<a href="/#">January 03, 2021</a>
												</div>
											</div>
												Lore ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sodales
												quisque litora dapibus primis lacinia
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>

			<div className="section-043 section-019">
				<div className="kodory-heading style-01">
					<div className="heading-inner">
						<h3 className="title" id="follow-us">Follow Us<span></span></h3>
						<div className="subtitle">
							@kodorystore
						</div>
					</div>
				</div>

				<div className="kodory-instagram style-01">
					<div className="instagram-owl owl-slick"
						data-slick="{&quot;arrows&quot;:false,&quot;slidesMargin&quot;:0,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:300,&quot;slidesToShow&quot;:6,&quot;rows&quot;:1}"
						data-responsive="[{&quot;breakpoint&quot;:480,&quot;settings&quot;:{&quot;slidesToShow&quot;:2,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:992,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:5,&quot;slidesMargin&quot;:&quot;0&quot;}},{&quot;breakpoint&quot;:1500,&quot;settings&quot;:{&quot;slidesToShow&quot;:6,&quot;slidesMargin&quot;:&quot;0&quot;}}]">
						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta1 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta2 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta2 } alt="Home 03" />
								<img className="img-responsive lazy" src={ insta3 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta4 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta5 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta6 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta7 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>

						<div className="rows-space-0">
							<a target="_blank" href="/#" className="item  " tabIndex="0">
								<img className="img-responsive lazy" src={ insta8 } alt="Home 03" />
								<span className="instagram-info">
									<span className="social-wrap">
										<span className="social-info">1
											<i className="pe-7s-chat"></i>
										</span>
										<span className="social-info">0
											<i className="pe-7s-like2"></i>
										</span>
									</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IndexContent;
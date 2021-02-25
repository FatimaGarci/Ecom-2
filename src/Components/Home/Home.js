import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
        <div className="slider">
        <ul>
          <li><img src="https://static.wixstatic.com/media/9afa90_dfaf7c8410cc4e6fae3864db9492993b~mv2.jpg/v1/fill/w_1000,h_500,al_c,q_90,usm_0.66_1.00_0.01/9afa90_dfaf7c8410cc4e6fae3864db9492993b~mv2.jpg" alt="eyes with Makeup" /></li>
          <li><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/skincare-1518089722.jpg" alt="Makeup" /></li>
          <li><img src="https://awomansconfidence.com/wp-content/uploads/2019/09/skincare-face-masks.png" alt="Girls wearing makeup" /></li>
        </ul>
      </div>

      <main>
        <div className="container">
            <div className="section-heading">
                <div className="line"></div>
                <h2>BEST SELLERS</h2>
                <div className="line"></div>
            </div>

            <div className="products-container">
                <div className="Products">
                    <img src="https://media1.popsugar-assets.com/files/thumbor/STL_T1r6cPul_vMu_V1zQ96XARA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/11/21/962/n/46860566/c2c031cc4cb7a6fc_Farmacy/i/Farmacy.jpg"
                        alt="VERY CHERRY BRIGHT" />
                    <h3>VERY CHERRY BRIGHT Vitamin c serum</h3>
                    <p className="price">$25</p>
                </div>
                <div className="Products">
                    <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-03/25/19/asset/34fda1d151a4/sub-buzz-4097-1585166314-2.png?downsize=900:*&output-format=auto&output-quality=auto"
                        alt="Face Oil" />
                    <h3>Virgin Marula Antioxidant Face Oil</h3>
                    <p className="price">$40</p>
                </div>
                <div className="Products">
                    <img src="https://media1.popsugar-assets.com/files/thumbor/0wPBJPBd1Ti8wR2IFyu9pdUkdko/0x159:2000x2159/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/01/032/n/1922153/332318795d93e55869e885.13671235_/i/best-skincare-products-to-pick-up-in-october-2019.jpg"
                        alt=" CLEANS'R REMOVE-IT-ALL CLEANSER" />
                    <h3>Herbivore PRISM Exfoliating Serum</h3>
                    <p className="price">$25</p>
                </div>
                <div className="Products">
                    <img src="https://www.charlottesbook.com/wp-content/uploads/2018/08/snow-mushroom-water-serum-300x300.png"
                        alt="Snow Serum" />
                    <h3>Snow Mushroom Water Serum</h3>
                    <p className="price">$35</p>
                </div>
                <div className="Products">
                    <img src="https://www.wondersmy.com/wp-content/uploads/2019/09/baby-got-peach-1.jpg"
                        alt="Eyeshadow Palette" />
                    <h3>Baby Got Peach Eyeshadow Palette</h3>
                    <p className="price">$60</p>
                </div>
                <div className="Products">
                    <img src="https://storkvn.com/wp-content/uploads/2019/08/SOL_PP_Palette_800x1200.jpg"
                        alt="Eyeshadow Palette" />
                    <h3>Colourpop- Sol Eyeshadow Palette</h3>
                    <p className="price">$20</p>
                </div>
                <div className="Products">
                    <img src="https://image.dhgate.com/0x0s/f2-albu-g10-M00-21-59-rBVaVl15036AOk5kAAFxRRYZmS8468.jpg/colourpop-california-love-palette-12.jpg"
                        alt="Eyeshadow Palette" />
                    <h3> California Love Eyeshadow Palette</h3>
                    <p className="price">$35</p>
                </div>
            </div>
            <Link to="/filter" className="button"> SOLD OUT PRODUCTS </Link>
            {/* <a href="products.html" className="button">VIEW ALL PRODUCTS</a> */}
        </div>
    </main>
    
    <section className="Ads">
        <img src="./img/add-1.png" alt="advertisement" />
        <img src="./img/add-2.png" alt="advertisement" />
    </section>

    <section className="skincare-value-sets">
        <div className="container">
            <div className="section-heading">
                <div className="line"></div>
                <h2>Skincare Value Sets</h2>
                <div className="line"></div>
            </div>
            <div className="products-container">
                <div className="Products">
                    <img src="https://cdn.shopify.com/s/files/1/0017/9027/9798/products/CW20-YoureSuperFresh-VALUE-Badge_47d1ea2f-20d8-4cc1-a511-0c1e402403a0_800x1200.jpg?v=1606149096" alt="SUPERFOOD KIT" />
                    <h3>YOU'RE SUPER FRESH | SUPERFOOD KIT</h3>
                    <p className="price">$16.00</p>
                </div>
                <div className="Products">
                    <img src="https://cdn.shopify.com/s/files/1/0017/9027/9798/products/CW20-TheBigGlowUp-VALUE-Badge_9df50b6c-e1f6-4590-9af9-f42f8d18c058_800x1200.jpg?v=1606118576" alt="BRIGHTENING KIT" />
                    <h3>THE BIG GLOW UP | BRIGHTENING KIT</h3>
                    <p className="price">$15.00</p>
                </div>
                <div className="Products">
                    <img src="https://cdn.shopify.com/s/files/1/0017/9027/9798/products/CW20-DewCrew-VALUE-Badge_800x1200.jpg?v=1607537669" alt="skincare Sets" />
                    <h3>DEW CREW | HYDRATING KIT</h3>
                    <p className="price">$15.00</p>
                </div>
                <div className="Products">
                    <img src="https://cdn.shopify.com/s/files/1/0017/9027/9798/products/CW20-PetalPower-VALUE-Badge_800x1200.jpg?v=1606118572" alt="fresh Skincare Sets" />
                    <h3> POWER | SOFTENING KIT</h3>
                    <p className="price">$15.00</p>
                </div>
            </div>
            <Link to="/filter" className="button"> VIEW ALL PRODUCTS </Link>
        </div>
    </section>

    <section className="ads-section">
        <h2>More Beauty For You</h2>
        <div className="img-ads">
            <a
                href="https://www.sephora.com/brand/charlotte-tilbury?icid2=homepage_botnav1_color_brand-sku-launch_ctflawless_charlottetilbury_us_desktop_image_100120">
                <img src="./img/ad-charlotte.png" />
            </a>
            <a
                href="https://www.sephora.com/product/sephora-favorites-sephora-favorites-hello-haul-star-heros-P463949?icid2=homepage_botnav2_multi-world_brand-sku-launch_sfkhellov3_sephora_us_desktop_image_092920">
                <img src="./img/ad-samples.png" />
            </a>
            <a
                href="https://www.sephora.com/product/rare-beauty-by-selena-gomez-lip-souffle-matte-cream-lipstick-P87987897?icid2=homepage_botnav3_color_brand-sku-launch_rarebeauty0920_lip_us_desktop_image_100120">
                <img src="./img/ad-rareBeauty.png" />
            </a>
        </div>
    </section>
    <section className="shipping-ad">
        <div className="worldWide-shipping">
            <h3>WE SHIP WORLDWIDE</h3>
            <p>FREE SHIPPING IN ORDERS OVER $100.00</p>
        </div>
    </section>
        
      </div>
        )
    };
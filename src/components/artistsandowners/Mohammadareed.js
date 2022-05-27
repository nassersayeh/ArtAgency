import React from 'react'
import './areed.css'
import me from '../../img/areed pic.jpeg'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import img1 from '../../img/mwjo.png'
import img2 from '../../img/areed2.jpeg'
import img3 from '../../img/areed3.jpeg'
import img4 from '../../img/areed5.jpeg'
import img5 from '../../img/areed6.jpeg'
import img6 from '../../img/areed7.jpeg'

const intro = () => {
    const link1 = "https://www.youtube.com/watch?v=-ns8TU1xDvQ"
    const link2 = "https://www.youtube.com/watch?v=INQ4Rj_Hm6E"
    const link3 = "https://www.youtube.com/watch?v=ZKYCsdsmxlE"
    const link4 = "https://www.youtube.com/watch?v=CKJgZMwLWFc"
    const link5 = "https://www.youtube.com/watch?v=Qz9C6lYOGY8"
    const link6 = "https://www.youtube.com/watch?v=8Y7ztWxYYU4"
    return (
        <div className="i">
            <Link to="/"><img src={logo} alt="" className="i-icon"/></Link>
            
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">اخبار الفنان</h2>
                    <h1 className="i-name">محمد عريض</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                اخبار الفنان محمد عريض
                                
                            </div>
                            <div className="i-title-item">
                                صور الفنان محمد عريض
                            </div>
                            <div className="i-title-item">
                                اغاني الفنان محمد عريض
                            </div>
                            <div className="i-title-item">
                                حفلات الفنان محمد عريض
                            </div>
                            <div className="i-title-item">
                                قريبا من انتاج شركتنا
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        الفنان محمد عبد الله راضي عريض ، مواليد مدينة عمان الاردنية في عام ١٩٨٩
                        هو احد المشتركين ببرنامج المواهب العربي ارب ايديل وقد استطاع الوصول
                        الى مراحل متقدمة لكن لم يحالفه الحظ في حينها

                        قام الفنان محمد عريض بانتاج عدة اعمال بالتعاون مع شركة ارت برودكشن 
                        ابرزها اغنية " جمالك خيال" وهي من كلمات الشاعر عامر مناع والحان الفنان
                        محمد عريض وتوزيع المهندس اسامة ابو صفية وعزف فاروق ابو صفية
                        تم انتاج هذا العمل في استديوهات ستيريو وينجز ، كما قام الفنان محمد عريض
                        بانتاج اغاني معادة مثل اغنية " على الله تعود " للفنان الراحل وديع الصافي
                        واغنية "وصلك خبر " للفنان ناصيف زيتون بالتعاون مع المؤثر احمد عوض
                        </p>
                        <h2 className="i-intro">انتاجات الشركة مع الفنان محمد عريض</h2>
                        <p className="i-desc">
                        قامت شركة ارت برودكشن بانتاج عدة اغاني مع الفنان محمد عريض من بينها اغنية
                        جمالك خيال و اغنية على لله تعود واغنية وصلك خبر والكثير من الاغاني المعادة
                        واغاني السينجلز للفنان محمد عريض
                        </p>
                        <h2 className="i-intro">اغاني الفنان محمد عريض</h2>
                        <div className="p1">
            <div className="p1-list1">
                <Product img={img1} link={link1}/>
                <Product img={img2} link={link2}/>
                <Product img={img3} link={link3}/>
                <Product img={img4} link={link4}/>
                <Product img={img5} link={link5}/>
                <Product img={img6} link={link6}/>
            </div>
            <title>محمد عريض</title>
            <meta name='description' content='الفنان محمد عريض'/>
            <meta name="google-site-verification" content="8OTx-pXAp_WwwdRvI6bRyq75sv2uXwcO_vCHNCEhZ0o" />
        </div>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img"/>
            </div>

        </div>
    )
}

export default intro

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <div className="w-full h-vh animate__animated animate__fadeInLeft animate__fadeInLeft">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ transition: { duration: 5 } }}
        whileInView={{ opacity: 1 }}
      >
        <div className="bg-white p-4">
          <h1 className="text-center text-3xl font-bold animate__animated animate__fadeInUp animate__fadeInUpBig">
            About Us
          </h1>

          <div className="p-6 max-w-3xl mx-auto leading-relaxed text-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-center">
              سياسة الخصوصية
            </h1>

            <p className="mb-4">
              نرحب بك في متجر الملابس الإلكتروني الخاص بنا. نحن نهتم بخصوصيتك
              ونحرص على حماية بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع
              بياناتك واستخدامها وحمايتها.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              1. البيانات التي نقوم بجمعها
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>الاسم الكامل</li>
              <li>البريد الإلكتروني</li>
              <li>رقم الهاتف</li>
              <li>عنوان الشحن</li>
              <li>معلومات الدفع (لا نخزن بيانات البطاقة مباشرة)</li>
              <li>سجل الطلبات وتفضيلات المنتجات</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              2. كيفية استخدام البيانات
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>إتمام عمليات الشراء.</li>
              <li>إرسال تحديثات الطلب.</li>
              <li>تحسين تجربة التسوق.</li>
              <li>إرسال عروض خاصة (اختياري).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              3. حماية البيانات
            </h2>
            <p className="mb-4">
              نتخذ كافة الإجراءات اللازمة لحماية بياناتك من الوصول غير المصرح به
              أو التعديل أو الإفشاء.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              4. مشاركة البيانات
            </h2>
            <p className="mb-4">
              لا نقوم بمشاركة بياناتك مع أي طرف ثالث إلا في الحالات الضرورية مثل
              شركات الشحن أو مزودي الدفع.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              5. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="mb-4">
              نستخدم ملفات الارتباط لتحسين سرعة الموقع وخدمة المستخدم. يمكنك
              تعطيلها من إعدادات المتصفح.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              6. حقوق المستخدم
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>الاطلاع على بياناتك.</li>
              <li>طلب تعديل أو حذف بياناتك.</li>
              <li>إلغاء الاشتراك من الرسائل التسويقية.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              7. التعديلات على السياسة
            </h2>
            <p className="mb-4">
              قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغيير هنا
              فورًا.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2 animate__animated animate__fadeInRight animate__fadeInRight">
              8. تواصل معنا
            </h2>
            <p className="mb-4">
              إذا كان لديك أي سؤال بخصوص سياسة الخصوصية يمكنك التواصل معنا عبر
              البريد الإلكتروني: support@example.com
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;

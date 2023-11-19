<template>
  <view class="container">
    <tui-navigation-bar :isOpacity="false" :isImmersive="false" @init="initNavigation" :scrollTop="scrollTop" backgroundColor="#f7f7f7" color="#333">
      <!-- #ifndef MP-ALIPAY || MP-BAIDU -->
      <view class="bar w-full flex items-center">
        <view class="tui-header-icon"><tui-icon color="#333" name="arrowleft" @click="back"></tui-icon></view>
        <text class="title">Help</text>
      </view>
      <!-- #endif -->
    </tui-navigation-bar>
    <view style="height: 70px"></view>
    <view class="help-container">
      <view class="table-view">
        <block v-for="(item, index) in dataList" :key="index">
          <tui-collapse arrowColor="#bbb" :index="index" :current="current" :disabled="item.disabled" @click="change">
            <template v-slot:title>
              <tui-list-cell padding="22rpx 30rpx" marginTop="-22rpx" lineColor="#c8c7cc" :hover="!item.disabled">
                <text class="text-base text-043168">{{ item.name }}</text>
              </tui-list-cell>
            </template>
            <template v-slot:content>
              <rich-text :selectable="true" :nodes="item.intro"></rich-text>
            </template>
          </tui-collapse>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      top: 0, //标题图标距离顶部距离
      scrollTop: 0,
      current: -1,
      dataList: [
        {
          name: 'mandate regulation',
          intro: `<p style="font-size: 14px;">✅An account with a minimum amount of 100USDT is required for trading.<br>
✅Regular Member accounts require 30 tasks to be completed before withdrawals can be requested.<br>
✅VIP1 member account needs to complete 40 tasks to request a withdrawal.<br>
✅VIP2 member account needs to complete 50 tasks to request a withdrawal.<br>
✅VIP3 member account needs to complete 60 tasks to withdraw.<br>
✅Each order has different merchants offering different items at different prices, so profits will vary.<br>
✅Each member account can be reset 3 times a day and only one 1 account can be registered per mobile number.<br>
✅All orders are sent randomly by the system and therefore cannot be changed, canceled or added.<br>
✅When making a deposit, you need to confirm your bank account with customer service to avoid mistakes.<br>
✅If the deposit is made to the wrong USDT account, the company reserves the right to resolve this fact in advance.<br>
✅If the order is not completed for a long time, which will result in a complaint from the merchant, your account will be frozen.<br>
✅New users can receive a reward of 25USDT for completing 3 reset.<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        },
        {
          name: 'About Booking Company',
          intro: `<p style="font-size: 14px;">Booking.com BV, the company that manages Booking.com™, is registered and headquartered in Amsterdam, the Netherlands (\\"Booking.com\\", \\"we\\", \\"us\\" or \\"our\\") and offers an online accommodation booking service (the \\"Service\\") published on its website (the \\"Website\\") and operated by local affiliates (the \\"Affiliates\\"). \\"), offers an online accommodation booking service (the \\"Service\\") published on its website (the \\"Website\\") and operated by local subsidiaries (\\"Subsidiaries\\") on a worldwide basis. \\") worldwide. Affiliates provide internal support to Booking.com BV Affiliates only and do not provide the Service, nor do they own, operate or manage the Site or any other website.<br>
<br>
Booking provides developers, agencies and merchants, and airlines with the tools and infrastructure to sell around the world the way they want to get online. From start-ups to large enterprises, our customisable back-end supports the creation of innovative shopping experiences today and is ready for what\\'s next. Creating the best headless travel hotel commerce platform requires not only a bold product vision, but also actionable values to guide our daily work and decision-making<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.<br>
</p>`,
          disabled: false
        },
        {
          name: 'How to achieve higher returns?',
          intro: `<p style="font-size: 14px;">-Users can earn additional referral fees by referring new users to become new platform agents. One of the rewards for the referral of 10% of the daily commission<br>
-Become an agent of the necessary conditions, thirty consecutive days can be questioned online customer service and access to the agent\\'s authority<br>
-Note: For further clarification, please contact our online customer service.<br>
<br>
                                                                                                  <br>
                                                                                                   Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        },
        {
          name: 'What is a reward order?',
          intro: `<p style="font-size: 14px;">Hoteliers have created Reward Orders (Combination Tasks) to attract more guests and increase business turnover.<br>
<br>
  What is the Reward Orders (Combination Tasks)?<br>
Combination Tasks are sent to the platform by Merchants and randomly assigned to Members by the platform. 1 set of Combination Tasks in a job will have 1-3 combinations, and one combination will have 1-3 consecutive negative numbers to form a Reward Order. The Member who completed the Bonus Order will receive 10 times of the commission. Due to the high amount of bonus orders, members are required to recharge the difference and the merchant will return the security deposit to the platform member with profit after completing the bonus order.<br>
<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        },
        {
          name: 'About Pending and On Hold',
          intro: `<p style="font-size: 14px;">Notice.<br>
If you do not complete the task within 24 hours, the merchant will complain about you, and if there are exceptional circumstances, you must deal with the merchant, and if the reputation of the merchant is damaged, the account will be frozen.<br>
<br>
<br>
Users whose credits have been deducted will be automatically blacklisted by the Platform system if they do not restore their credits within 48 hours as requested by the Customer Service.<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        },
        {
          name: 'Privacy Policy',
          intro: `<p style="font-size: 14px;">obile application, you are deemed to have agreed and consented to the Company, its related companies and affiliates (collectively referred to herein as \\"Company\\", \\"us\\", \\"we\\" or \\"our\\") and our respective representatives collect, use, disclose and share your personal data and disclose such personal data to the Company\\'s authorized service providers, business partners (\\"Business Partners\\" ) and relevant third parties in the manner set out in this Privacy Policy.<br>
<br>
If you are under the age of 18, please do not send us any personal data about yourself.<br>
If you do not agree to this Privacy Policy, please do not access or use our website or mobile application.<br>
<br>
Types of Personal Information We Collect \\"Personal Information\\" means information that can be used to identify, locate or contact an individual or business, including but not limited to your personal data. It also includes other information that may be related to personal information.<br>
<br>
For the purposes of this Privacy Policy, \\"Personal Data\\" shall have the meaning given to it by the PDPA. Usually, this is information that specifically identifies you.<br>
For the purposes of your account registration process and subsequent purchase and/or use of our products and/or services, we collect personal information from you, which may include, but is not limited to:<br>
(a) \\"Contact Information\\" that allows us to communicate with you, such as your name, social media site user account name, telephone number.<br>
(b) \\"transactional information\\" about how you interact with the platform, such as platform service products you view, purchase, redeem and/or rate reviews; about how you use our website and/or mobile applications, other communications and applications other information about the program; and how you interact with the company, its affiliates and service providers.<br>
(c) \\"Financial Account Information\\" (such as your bank account number, bank name, and your personal real name) required to process payments for your purchases of Company service products.<br>
<br>
How Booking collects personal information<br>
We ask you to provide personal information (including but not limited to contact information, transaction information and financial account information) when you register, subscribe; purchase, submit, publish or fulfill platform service products; or otherwise communicate with our website or mobile application program or contact the platform to interact.<br>
<br>
We collect transactional information when you use our website. For example, we may track your viewing, purchase, redemption, submission or other means of communication provided from time to time on or through the Site or Platform Services offerings in connection with our social media pages or accounts. We also collect transactional information if you contact us by phone, text message, email, social media interaction, or other means of communication, such as for customer support purposes.<br>
<br>
We may, at our discretion, contact you and ask you to provide us with feedback you provide about our products or services, or to participate in interviews we provide about our products or services, and the feedback, interviews, or other responses you provide to us may Include your personal information.<br>
<br>
We may receive personal information about you from other sources from which you have registered, such as our business partners or other third parties. We may link this information with other personal information we collect about you.<br>
<br>
When you provide personal information on behalf of another person, you undertake and will ensure that the individual providing us with personal information has authorized the disclosure of his personal information to us, is informed and agrees to the terms of this Privacy Policy.<br>
<br>
If you do not wish to provide us with your personal information (including your personal data), you may choose not to do so. Furthermore, you have the right to withdraw your consent at any time by contacting us through our Live Chat. However, please note that by refusing to provide your personal information (including your personal data), you may not be able to rate products or use certain services on our website and/or mobile applications that require submission of your personal data and/or or be able to benefit from services we provide that may require such personal data.<br>
<br>
How Booking uses personal information<br>
The platform uses personal information for the following purposes:<br>
(a) operate and improve our website and/or mobile application, including performing analytics aimed at improving our services, making the website and/or mobile application or service more user-friendly, and displaying content preferences tailored to you and interests, and to improve our services;<br>
(b) open and maintain your account with us to understand you and your preferences to enhance your experience and enjoyment of our services;<br>
(c) send you relevant information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative information;<br>
(d) to provide such general data for the purposes of research, research, compiling statistics and analysis without expressly identifying you or any particular user;<br>
(e) provide you with information, including but not limited to product and service offers from our business partners, including offers based on variables such as stated and expected customer interests, personal characteristics or location;<br>
(f) facilitate orders and fulfill requests for platform service offerings, such as booking transportation and accommodation for you;<br>
(g) assess the customer\\'s eligibility for certain offers, products or services;<br>
(h) assess the types of offers, products or services that may be of interest to customers;<br>
(i) tracking redemptions of platform service offerings and performing other analytics;<br>
(j) providing customer support, including our business partners;<br>
(k) send you alerts, technical notices, updates, security alerts and support and administrative information service announcements or marketing;<br>
(l) administer surveys, contests or other promotions or events sponsored by us or our business partners;<br>
(m) to manage our day-to-day business needs, such as website administration, fulfillment, analytics, fraud prevention, enforcement of our corporate reporting obligations, terms of service, or compliance with the law; and<br>
(n) any other purpose we may notify you from time to time.<br>
<br>
When and why Booking discloses personal information<br>
Except as otherwise provided in this Privacy Policy, we will not sell, trade, rent or otherwise share the personal information we collect with third parties for marketing purposes unless you request or authorize us to do so. We may disclose your personal information to third parties who may only use personal information for the purposes described above:<br>
(a) Affiliates (for example, subsidiaries and other companies owned or controlled by Platform Companies);<br>
(b) We engage service providers to provide limited administrative and communication services on our behalf, such as website hosting, processing and deposits, withdrawals, rating review services and providing customer support. The Platform does not authorize these service providers to use your personal information except to provide those services we request. We provide your personal information to service providers to complete your purchase of platform service products. The service providers mentioned in this paragraph may be located in or outside Singapore. In this regard, by accepting this Privacy Policy or continuing to access or use our website or mobile application, you are deemed to have agreed and agreed that such service providers may, to the extent necessary, provide you with services through our website on behalf of , collect, use, disclose and/or process information about you;<br>
(c) our legal advisers or other professional advisers;<br>
(d) third parties necessary to conduct a merger, acquisition or otherwise; to support the sale or transfer of business assets; to exercise our rights or to protect our property; to protect the rights, property or safety of others, to investigate fraud, and to respond to government requests ; or as needed to support audit, compliance and corporate governance functions. If a Platform Company is involved in a merger, acquisition or sale of all or part of its assets, you will be notified of any changes in the ownership or use of your personal information, as well as any changes you may have regarding your personal information, through a Platform System announcement and/or a prominent notice on our website any choices made by the information; and<br>
(e) necessary third parties or authorities to defend themselves in litigation or regulatory action, and when required or advised by law to do so, such as in response to a subpoena or similar legal process, including law enforcement agencies, regulatory agencies, and Singapore and our operations the courts of other countries in which it is located.<br>
<br>
Collection and use of information about your computer<br>
By using the services or software on our website and mobile applications, you expressly consent to the transfer and use of such information as set forth herein. If you do not agree to this, please do not continue to use the service and you may choose to delete or delete any personal information we have collected at any time by contacting us on [Live Customer Service].<br>
<br>
These services use Internet protocols to send computer information to appropriate systems, such as:<br>
(a) your Internet Protocol address;<br>
(b) the type of operating system;<br>
(c) browser and name and version;<br>
(d) your hardware information;<br>
(e) your region and language settings;<br>
(f) the software version you are using; and<br>
(g) the language code of the device on which you install the software.<br>
<br>
The platform uses this information to provide you with other features and services. The platform may use computer information to improve our services. We may also share such non-personal information with others, such as hardware and software vendors. They may use this information to improve the way their products work on our services.<br>
<br>
Cookies and Related Technologies<br>
Cookies are small files of letters and numbers that are stored on your computer by the websites you visit. Cookies enable us to help you in a number of ways; for example, by allowing us to personalize our website by providing you with recommendations based on your browsing history or preferences that you have previously selected. By using our website, you acknowledge and agree to our use of cookies to collect web data, conduct online behavioral advertising campaigns, and enhance the overall customer experience. If you do not consent to the company\\'s use of cookies for these purposes, you may opt-out by modifying the settings of the internet browser you use. However, please note that if you opt out here, certain areas of our website that require the collection of relevant data may not be available to you.<br>
<br>
For our internal purposes, we may use third-party web analytics services to track certain information related to your use of our website. Our website uses Google Analytics, a web traffic analysis service provided by Google Inc. (\\"Google\\"). Please see //www.google.com/policies/privacy/partners to learn more about how Google uses data when you use our website and how to control the information sent to Google. You can prevent Google from collecting and processing data by using the Google Ads settings page or by downloading and installing its browser add-on (https://tools.google.com/dlpage/gaoptout).<br>
<br>
We use the following cookies:<br>
(a) Strictly Necessary Cookies. These are cookies that are required for our website to function. For example, they include cookies that enable you to log in to secure areas of our website, use your shopping cart or use electronic billing services.<br>
(b) Analytics/performance cookies. They allow us to identify and count the number of visitors and to see how visitors move around our website as they use our website. This helps us improve the way our site works, for example, making sure users can easily find what they\\'re looking for.<br>
(c) Functional cookies. These are used to identify you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your chosen language or region).<br>
(d) targeting cookies. These cookies record your visit to our website, the pages you visit and the links you follow. We will use this information to make our website and the advertisements displayed on it more relevant to your interests. For this purpose, we may also share this information with third parties.<br>
<br>
Your choice<br>
We believe that as we learn more about you and the kinds of services you enjoy, you will benefit from a more personalised experience. However, you can limit the information you provide to the Platform and the communications that the Platform sends to you.<br>
<br>
Access and Correction of Personal Information<br>
Right to use<br>
You have the right to access the personal data we hold about you and certain information about how we use it and with whom we share it.<br>
<br>
Where permitted by law, we reserve the right to charge a reasonable administrative fee for this service. In exceptional circumstances and as permitted by applicable law, we reserve the right to deny you access to your personal data and may provide an explanation as required by applicable law.<br>
<br>
Correct<br>
You have the right to correct any inaccurate personal data held about you.<br>
If you want to inquire, correct or request to delete your personal data, please contact us through [Online Customer Service].<br>
<br>
If you have other questions or requirements, please contact us through [Online Customer Service]. While we are always ready to help you, we cannot always delete records of past interactions and transactions. For example, we need to keep records related to our website for financial reporting and compliance reasons.<br>
<br>
Personal information security<br>
We follow generally accepted standards to protect personal information submitted to us, both during transmission and after we receive it. Any payment transactions will be encrypted using SSL technology. If we provide you (or you choose) a password that enables you to access certain parts of our website, you are responsible for keeping that password confidential. We ask that you do not share your password with anyone.<br>
<br>
However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute safety. Accordingly, we are not responsible for information you submit to or receive from us over the Internet, or for unauthorized access or use of that information. We also cannot and do not warrant that the information you communicate to us or we communicate to you will be received or will not be changed before or after it is transmitted to us or to you, as the case may be. In no event, you agree to require us, our subsidiaries or affiliates, our past, present and future employees, officers, directors, contractors, consultants, suppliers, suppliers, service providers, agents, Representatives, predecessors, successors and assigns are responsible for any loss or damage of any kind whatsoever arising from any misappropriation, interception, modification, deletion, destruction or use of information provided through our website or mobile application.<br>
<br>
If you have any questions about the security of our website, you can contact us through [Live Customer Service].<br>
<br>
Privacy Practices of Third Parties<br>
This Privacy Policy addresses the Platform\\'s use and disclosure of information solely through your interactions with our website and mobile applications. Other websites accessible through links from our website may have their own privacy policies or statements and personal information collection, use and disclosure practices. Your access to these other websites is at your own risk and we are not responsible for those websites. Our business partners may also have their own privacy policies or statements. While we strive to protect your personal data on our website or mobile application, we have no control over the policies of our business partners or other websites to which we may link, or the use and security of any personal data you may share , and are not responsible for them. Therefore, we encourage you to familiarize yourself with the privacy policies or notices provided by these other parties before providing information to them or taking advantage of offers or promotions they offer.<br>
<br>
Our website and/or mobile applications may offer social sharing features, social media links and other integrated tools. Depending on your settings for use of entities that provide social sharing features or social media, your use of such social sharing features or social media may share your information with your contacts or the public. You are advised to visit the privacy policies of the entities providing these social sharing features or social media for information on how they collect, use and/or disclose your personal data.<br>
<br>
Changes to this Privacy Policy<br>
We may update this Privacy Policy from time to time to clarify our practices or to reflect new or different privacy practices, such as when we add new features to our website or mobile application. If we make any material changes, we will notify you through a notice on the website and mobile application before the changes become effective, and we may notify you of such changes through a system announcement at our discretion. We encourage you to periodically check the website or mobile application for the latest information on our privacy practices.<br>
<br>
Links to other websites<br>
Our website contains links to other websites. The fact that we link to a website does not represent our relationship with that third party. We do not control third-party websites. These other websites may place their own cookies or other files on your computer, collect data, or request personally identifiable information from you. Other websites follow different rules regarding the use or disclosure of personally identifiable information you submit to them. We encourage you to read the privacy policies or statements of other websites you visit.<br>
<br>
Data transmission<br>
From time to time, we may save your data on servers in the United States and any other locations we deem appropriate. We may also transfer your data to our overseas offices or any other service providers and/or business partners as described above, We are committed to adequately protecting your personal data regardless of where it is located and to provide appropriate protection for your personal data should such data be transferred outside the United States.<br>
<br>
In order to better protect the security of each account, the platform will update, maintain and backup from time to time, so the platform will also change the website from time to time.<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        },
        {
          name: 'Term and Conditions',
          intro: `<p style="font-size: 14px;">Agreement between the agent and the company platform<br>
This website and any related mobile applications (\\"Site\\") are operated by Company and these terms and conditions of use (\\"Terms of Use\\") set out the terms under which Company agrees to provide services to you through this website (see terms defined below) and the terms on which the supplier agrees to provide the service to you. Accordingly, this website is provided to you on condition that you accept without modification all terms, conditions and notices under these terms of use. Please read the terms of use carefully. You undertake to perform the obligations contained in these Terms of Use. Your use of this website constitutes your agreement. If you do not agree to these terms of use, you are not authorized to use this site; therefore, please do not use or rate comments through this site. The platform may change these terms of use at any time, and your continued use of the site is conditional on acceptance of the updated terms of use.<br>
<br>
1. Definition and scope<br>
The following definitions have the same meaning whether in the singular or the plural. \\"Agent\\" (or \\"you/your\\") means the agent who maintains and/or provides one or more of the services offered on the Site.<br>
\\"Terms of Use\\" means the general terms and conditions of rating review and use as amended from time to time.<br>
\\"Photo Submission Guidelines\\" means the guidelines set forth in Section 11.2 of these Terms of Use, which may be further amended from time to time.<br>
\\"Rules and Restrictions\\" means the terms and conditions applicable to suppliers who enter into separate contracts with agents (e.g. airline conditions of carriage, individual train operating company conditions).<br>
\\"Services\\" means the services provided by the Platform, which the Agent will be able to experience in accordance with the Terms of Use after payment, including but not limited to all such services provided by suppliers, such as air transport services, accommodation services, car services provided through the Platform Rental services, rail transport services and insurance.<br>
\\"Vendor\\" means a vendor that provides complementary and support services and rating reviews to the Platform that provides the Services, such as airlines, hotels, travel agencies, car rental companies, train operators or insurance providers.<br>
\\"Site\\" means the Platform website, and any and all associated mobile applications. References to the word \\"Site\\" shall include access to the Site from a desktop, laptop, mobile device and/or any other device capable of connecting to the Internet.<br>
<br>
2. Legal Authorization of the Client<br>
2.1 The lead agent must be at least 18 years of age and of sound mind; and have the statutory authority to make binding legal obligations. In this regard, the lead agent must be legally authorized to enter into contractual obligations at the time of the rating review and obtain the necessary consent or authorization to act on or on behalf of anyone in the rating review.<br>
2.2 The Lead Agent must also ensure and hereby confirm that the details provided to the evaluating hotels are complete and accurate, that all parties agree to be bound by these Terms of Use, and that the Lead Agent has the authority to accept and enforce the Representative Ratings. All agents in the comments accept these terms of use.<br>
2.3 The Lead Agent is the person responsible for the evaluate hotel, paying the deposit and full price, making any amendment and cancellation requests, paying any additional fees related to the evaluate hotels and all other matters related to the rating review.<br>
<br>
3. General use of the website<br>
3.1 As a condition of your use of this website, you warrant that (i) you will use this website in accordance with these terms of use; (ii) you will only use this website to make lawful reservations for you or others legally authorized by you; (iii) if You own a Platform account and you will protect your account information and supervise and be solely responsible for any use of your account by you and anyone other than you.<br>
3.2 We reserve the right to deny access to the Website and Services to anyone at any time for any reason in our sole discretion. For example, without limitation, any fraudulent or conflicting use of this site\\'s Terms of Use shall be grounds for denying the agent access to the services provided by the Platform and Providers or other features of the site.<br>
<br>
4. Prohibited Activities<br>
4.1 The content and information on this website (including but not limited to the prices and availability of evaluate hotel) and the infrastructure used to provide such content and information are the exclusive rights of us or our suppliers and providers. Although you may conduct rating reviews through this website, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, sell or resell any information from or Software, products or services obtained through this website. In addition, you agree not to: (i) use this website or its content for any commercial purpose;<br>
(ii) conduct any speculative, false or fraudulent evaluate airlines ratings;<br>
(iii) use any robot, spider, crawler or other automated means or any manual process to access, monitor or reproduce any content or information on this website for any purpose without our express written permission;<br>
(iv) violate any restrictions in the Robot Exclusion header on the Site, or bypass or circumvent other measures used to prevent or restrict access to the Site;<br>
(v) deep linking to any part of this website for any purpose (including, without limitation, the purchase path of any evaluated airlines ratings) without our express written permission;<br>
(vi) \\"frame\\", \\"mirror\\" or otherwise incorporate any part of this website into any other website without our prior written authorization.<br>
4.2 If your evaluate airlines ratings or account show signs of fraud, abuse or suspicious activity, the company may cancel any evaluated airlines ratings associated with your name, phone number or account and close any associated platform accounts. If you engage in any fraudulent activity, the platform reserves the right to take any necessary legal action and you may be liable for monetary losses to our platform, including litigation costs and damages. To dispute a frozen or closed account, please contact Live Customer Service.<br>
<br>
5. Privacy Policy<br>
The platform believes in protecting your privacy. You can view our current Privacy Policy on another page that also governs your use of the website to learn about our practices.<br>
<br>
6. Confirmation and Cancellation of Evaluate Hotel<br>
confirm<br>
6.1 The confirmation of the evaluate airlines ratings including the basic elements such as service description and price will be sent to the lead agent on the platform rating review page. If the lead agent does not complete the rating review within 24 hours, he/she should contact customer service to resolve the unfreeze or unlock the account.<br>
6.2 It is expressly agreed that the data stored in the company and/or its suppliers\\' information systems shall constitute evidence in relation to the evaluate airlines ratings conducted by the lead agent. Data stored in a computer or electronic medium is valid evidence and is therefore acceptable under the same conditions as physical written documents with the same evidential value.<br>
Cancellation and Postponement<br>
6.3 Once a rating review is posted, it cannot be cancelled. In any event, once payment is received, no refund will be given even if cancelled.<br>
6.4 If the Agent wishes to extend the rating review and/or other changes after conducting the Evaluate Airlines ratings, including but not limited to changing the Agent\\'s details, the Agent should contact Customer Service. Fees may apply to applicable suppliers if the evaluate airlines ratings is extended.<br>
<br>
7. Film and television promotion<br>
7.1 The promotion of film and television through data integration has not occurred any accidents, but some regions or film products involve risks such as sensitive content. The company advises customers to review any movie viewing bans, warnings, announcements and recommendations issued by the relevant government and displayed on its website. Nonetheless, the company should comply with the advice of the local government\\'s Ministry of Foreign Affairs on media safety and will not send you to any of the above-mentioned authorities as inappropriate. However, any distribution location not specified by the agency shall be considered legal content and the company shall not be held responsible.<br>
<br>
8. Statement of Liability<br>
8.1 In any case, the company does not represent or guarantee that there is no risk of promotion of such airlines ratings, and the company does not assume any responsibility for any damage or loss that may occur in the promotion of such airlines ratings.<br>
<br>
9. Comments, Comments and Other Submissions<br>
9.1 We thank you for your letter. Please be aware that any airlines reviews, other comments, questions, comments, suggestions, ideas or similar content contained in any Submission (collectively, \\"\\" Submissions\\"), you grant the Company a non-exclusive, royalty-free, perpetual, transferable, irrevocable and fully sublicensable right to (a) use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and make publicly available Display and perform such Submissions around the world in any media now known or hereafter designed; (b) use the name you submit in connection with such Submissions.<br>
9.2 You acknowledge that the Company may, in its sole discretion, choose to provide your comments or attribution of comments (for example, to list your name and hometown in comments you submit) and that such submissions may be shared with our vendor partners. You further grant Company the right to legally pursue any person or entity that violates your or Company\\'s rights in the Submission.<br>
9.3 You acknowledge and agree that Submissions are non-confidential and non-proprietary. To the extent possible, you expressly waive any and all \\"moral rights\\" (including rights of attribution or integrity) that may exist in your Submission, and agree that you have no objection to the publication, use, modification, deletion or We, the Company or any of our partners or licensees using your Submissions.<br>
9.4 We are not responsible for any Submissions posted or submitted by you. We are under no obligation to post your comments; we reserve the right to decide in our sole discretion which comments are posted on the site. If you do not agree to these Terms of Use, please do not provide us with any Submissions.<br>
9.5 You are solely responsible for the content you submit, including but not limited to comments posted to this website. You are prohibited from posting or transmitting to or from this website:<br>
(i) any unlawful, threatening, libelous, defamatory, obscene, pornographic or other material or content that violates the rights of publicity and/or privacy or violates any law;<br>
(ii) any commercial material or content (including, without limitation, solicitation of funds, advertising or marketing of any goods or services);<br>
(iii) any material or content that infringes, misappropriates or violates any copyright, trademark, patent or other proprietary right of any third party . You are solely responsible for any damages caused by your violation of the above limitations, or any other damages caused by your posting of content to this site. You acknowledge that the Company may exercise its rights (such as, but not limited to, use, posting, deletion) over any Content you submit without notice. If you submit multiple reviews for the same hotels, we may choose to use any one hotels, regardless of whether it was submitted more recently.<br>
<br>
10. Works<br>
10.1 All submissions are subject to the Guidelines for Submission of Works.<br>
10.2 In accordance with the Work Submission Guidelines, any work you submit must:<br>
(a) Thematically relevant - All work must be related to film, director, production company or general screenplay experience.<br>
(b) Community/family friendly<br>
(c) is not illegal, obscene, pornographic, profane, vulgar, offensive or abusive.<br>
(d) not infringe the privacy of any person or entity or violate the rights of any individual.<br>
(e) No child or any third party shall be involved without the consent of the child or any third party (or parental consent of a child under the age of 18).<br>
(f) Original - You may only submit your own work. Do not submit photos from any other source (personal or commercial). Plea e suitability of the information, software, products and services (if any) contained on this website for any purpose and the suitability of any products or services contained or sold on this website Statements do not constitute any endorse website, whether based on contract, tort, strict liability or otherwise, even if the company and its affiliates and/or any of its suppliers have been advised of the possibility of damages. Notwithstanding anything to the contrary, no liability for death or personal injury, and to the fullest extent permitted by law, the Company and/or its affiliates shall be liable only for direct, indirect, special, incidental, Exemplary, consequential loss or damage, whether in contract, tort, strict liability or otherwise, arising out of and/or in connection with Customer\\'s use of any of the Company\\'s services, not exceeding the date of the claim in respect of any one event or the maximum value of the total value of transactions for which a series of related events generate a claim. For insurance claims purchased on behalf of a client, the company shall process it on behalf of the client without the prior consent of the client. You acknowledge that the insurance purchased can act as a company to process its payments and reimburse you for the necessary amount if required. This does not affect your statutory rights as a consumer. Notwithstanding anything to the contrary, the Company and its affiliates are not responsible for any third-party disputes that you may have with any such third parties with which the Company works, nor are the Company and its affiliates responsible for the integrity of such third parties And the Standard is responsible for the company working with it, although the company will do its best to ensure that only consistently well-behaved third parties continue to collaborate in its corporate network. The Company may, in its sole discretion but not be obliged to take action against any third party that may misbehave in any way.<br>
11.5 The Company is not obligated to disclose any costs (whether actual or estimated) to the Client, nor is it obligated to make any enquiries about it. The company is also a technology service provider, not a product provider, so it cooperates with other service providers to provide corresponding services to customers. 12. Indemnity<br>
You agree to indemnify against any claim, cause of action, demand, recovery, loss, damage, fine, fine or other costs or expenses of any kind or nature, including but not limited to reasonable legal and accounting fees, by third parties due to:<br>
(a) your breach of these Terms of Use or the documents referenced herein;<br>
(b) you violate any law or the rights of a third party;<br>
(c) Your use of this website.<br>
<br>
12. Links to Third Party Websites<br>
This website may contain hyperlinks to websites operated by parties other than the company. Such hyperlinks are provided for your information only. company. We do not control such websites and are not responsible for their content or your use of them. The Company\\'s inclusion of hyperlinks to such sites does not imply any endorsement of the material on such sites or any association with its operators.<br>
<br>
13. Copyright and Trademark Notices<br>
All contents of this website are copyrighted by the company. all rights reserved. The Company is not responsible for the content on websites operated by parties other than the Company. Other logos, product and company names mentioned herein may be the trademarks of their respective owners. If you become aware that our trademarks and/or trade names have been infringed, please contact Live Customer Service to let us know.<br>
<br>
14. Counter-Notifications<br>
14.1 The Company respects the copyrights of others. If you believe in good faith that material hosted by us infringes your copyright, you (or your agent) may send us a written notice containing the following information, provided that you are the owner or that you (or your agent) are Owners authorized to act on behalf of the allegedly infringing exclusive rights:<br>
1. A clear identification of the copyrighted work you claim has been infringed.<br>
2. Clear identification of the material you claim is infringing the copyrighted work, and information that enables us to locate the material on the site, such as a link to the infringing material.<br>
3. Your contact information so that we can respond to your complaint, preferably an email address and phone number.<br>
14.2 Please note that if your complaint is incorrectly filled out or incomplete, we will not process your complaint. Notifications regarding this website should be sent to us by Live Customer Service for quickest resolution.<br>
14.3 We will review and process all notices that meet the above requirements. If we remove or disable access in response to such a notification, we may notify the owner or administrator of the affected site or content so that he or she can issue a counter-notification.<br>
14.4 For any other questions regarding this process, please contact our Live Customer Service.<br>
<br>
15. Account Termination<br>
The Company has adopted a policy of terminating subscribers or account holders deemed repeat infringers in appropriate circumstances and at the Company\\'s sole discretion. Company may also, in its sole discretion, restrict access to the Site and/or terminate the account of any user who infringes any intellectual property rights of others, regardless of any repeat infringement. If you believe that the account holder or subscriber is a repeat infringer, please submit a notice with sufficient information to allow us to verify that the account holder or subscriber is a repeat infringer.<br>
<br>
16. General<br>
16.1 This Agreement shall be governed by the laws of India. Use of this website is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including but not limited to this paragraph.<br>
16.2 For any questions that may arise, please contact: Live Customer Service<br>
16.3 Any dispute arising out of or in connection with these Terms of Use, including any question regarding its existence, validity or termination, shall be submitted to and finally resolved by arbitration in India are currently in effect and these rules are deemed to be incorporated into these Terms by reference. The arbitral tribunal shall consist of one (1) arbitrator appointed by the SIAC Chair. The language of arbitration shall be English. You hereby waive any and all rights of appeal and agree that all awards granted by the arbitral tribunal shall be binding and final.<br>
16.4 The Company may (but you may not) assign, assign, subcontract or delegate its rights, duties or obligations under this Agreement.<br>
16.5 You agree that no joint venture, partnership, employment or agency relationship exists between you and the Company as a result of this Agreement or your use of this website.<br>
16.6 If any part of this Agreement is determined to be invalid or unenforceable under applicable law (including but not limited to the above-mentioned disclaimer of warranty and limitation of liability), the invalid or unenforceable provision will be deemed to be superseded by a valid, enforceable provision. The terms and remainder of the agreement that come closest to the intent of the original terms will survive.<br>
16.7 This Agreement constitutes the entire agreement between you and the Company in relation to the Website and supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the Client and the Company in relation to the Website. A printed version of this Agreement and any notice given in electronic form shall be admissible in judicial or administrative proceedings based on or in connection with this Agreement to the same extent and condition as other business documents and records originally generated and maintained. printed form.<br>
<br>
<br>
<br>
<br>
Copyright © 1996-2023 Booking™. All rights reserved.</p>`,
          disabled: false
        }
      ]
    }
  },
  methods: {
    initNavigation(e) {
      this.top = e.top
    },
    back() {
      uni.navigateBack()
    },
    change(e) {
      this.current = this.current == e.index ? -1 : e.index
    }
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  }
}
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
}
.bar {
  height: 44px;
  padding-right: 20rpx;
  padding-left: 20rpx;
  border-bottom: 0;
  background-color: #f7f7f7;
  -webkit-box-shadow: 0 1px 6px #ccc;
  box-shadow: 0 1px 6px #ccc;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
}
.tui-header-icon {
  color: #999;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  line-height: 1;
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  position: relative;
  z-index: 20;
}
.title {
  font-size: 17px;
  font-weight: 500;
  line-height: 44px;
  position: absolute;
  display: block;
  width: 100%;
  margin: 0 -20rpx;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  color: #000;
}
.help-container {
  width: 95%;
  margin: auto;
  background: #fff;
  padding: 20rpx;
  border-radius: 20rpx;
}
.text-043168 {
  color: #043168;
}
.table-view {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  background-color: #fff;
}
.table-view:before {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
  top: -1px;
}
.table-view:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
</style>

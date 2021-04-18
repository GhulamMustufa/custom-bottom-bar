// import React from "react";

// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import AddCard from "../Screens/AddCard";
// import AddOtherBankCard from "../Screens/AddOtherBankCard";
// import AddOwnBankCard from "../Screens/AddOwnBankCard";
// import SelectBillCompany from "../Screens/SelectBillCompany";
// import BillPayment from "../Screens/BillPayment";
// import PayCompanyBill from "../Screens/PayCompanyBill";
// import ConfirmBillPayment from "../Screens/ConfirmBillPayment";
// import PaymentSuccess from "../Screens/PaymentSuccess";
// import DiscountOffers from "../Screens/DiscountOffers";
// import FoodCompanies from "../Screens/FoodCompanies";
// import RechargeAccount from "../Screens/RechargeAccount";
// import TicketPayment from "../Screens/TicketPayment";
// import AddPayee from "../Screens/AddPayee";
// import EditProfile from "../Screens/EditProfile";
// import Approvals from "../Screens/Approvals";
// import ContactUs from "../Screens/ContactUs";
// import Favourites from "../Screens/Favourites";
// import Help from "../Screens/Help";
// import Home from "../Screens/Home";
// import InviteFriends from "../Screens/InviteFriends";
// import MyAccount from "../Screens/MyAccount";
// import PayeeList from "../Screens/PayeeList";
// import Promotions from "../Screens/Promotions";
// import Rewards from "../Screens/Rewards";
// import Settings from "../Screens/Settings";
// import ChangePassword from "../Screens/ChangePassword";
// import MyCards from "../Screens/MyCards";
// import MyBanks from "../Screens/MyBanks";
// import TermsAndConditions from "../Screens/TermsAndConditions";

// import MoneyTransfer from "../Screens/MoneyTransfer";
// import BankTransfer from "../Screens/BankTransfer";
// import BankDeposit from "../Screens/BankDeposit";
// import PaymentHistory from "../Screens/PaymentHistory";
// import ScanCode from "../Screens/ScanCode";

// import ApprovalRequest from "../Screens/ApprovalRequest";
// import PendingApproval from "../Screens/PendingApproval";

// import Icon from "../Common/Icon";
// import Color from "../Utils/Colors";

// const Stack = createStackNavigator();
// const TopTab = createMaterialTopTabNavigator();

// function TopTabScreens() {
//   return (
//     <TopTab.Navigator
//       swipeEnabled={false}
//       tabBarOptions={{
//         labelStyle: { fontSize: 12 },
//         activeTintColor: Color.blueTab,
//         inactiveTintColor: Color.black,
//         indicatorStyle: { backgroundColor: Color.blueTab },
//         // tabStyle: { width: 100 },
//         // style: { backgroundColor: 'powderblue' },
//       }}
//       screenOptions={{}}
//     >
//       <TopTab.Screen
//         name="PendingApproval"
//         component={PendingApproval}
//         options={{ tabBarLabel: "Pending" }}
//       />
//       <TopTab.Screen
//         name="ApprovalRequest"
//         component={ApprovalRequest}
//         options={{ tabBarLabel: "Request" }}
//       />
//     </TopTab.Navigator>
//   );
// }

// export function AddCardStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="AddCard"
//         component={AddCard}
//         options={{
//           title: "Add Card",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function AddOtherBankCardStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="AddOtherBankCard"
//         component={AddOtherBankCard}
//         options={{
//           title: "Add Card",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function AddOwnBankCardStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="AddOwnBankCard"
//         component={AddOwnBankCard}
//         options={{
//           title: "Add Card",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function BillPaymentStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="BillPayment"
//         component={BillPayment}
//         options={{
//           title: "Bill Payment",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function SelectBillCompanyStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SelectBillCompany"
//         component={SelectBillCompany}
//         options={{
//           title: "Select Company",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// export function PayCompanyBillStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="PayCompanyBill"
//         component={PayCompanyBill}
//         options={{
//           title: "Pay Bill",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function ConfirmBillPaymentStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ConfirmBillPayment"
//         component={ConfirmBillPayment}
//         options={{
//           title: "Confirm Payment",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function PaymentSuccessStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="PaymentSuccess"
//         component={PaymentSuccess}
//         options={{
//           title: "PaymentSuccess",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function DiscountOffersStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DiscountOffers"
//         component={DiscountOffers}
//         options={{
//           title: "Discount Offers",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function FoodCompaniesStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="FoodCompanies"
//         component={FoodCompanies}
//         options={{
//           title: "Select Food Company",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function RechargeAccountStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="RechargeAccount"
//         component={RechargeAccount}
//         options={{
//           title: "Recharge Account",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function TicketPaymentStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="TicketPayment"
//         component={TicketPayment}
//         options={{
//           title: "Ticket Payment",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function SettingsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           title: "Settings",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function EditProfileStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfile}
//         options={{
//           title: "Edit Profile",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function ChangePasswordStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ChangePassword"
//         component={ChangePassword}
//         options={{
//           title: "Change Password",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function MyCardsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="My Cards"
//         component={MyCards}
//         options={{
//           title: "My Cards",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function TermsAndConditionsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="TermsAndConditions"
//         component={TermsAndConditions}
//         options={{
//           title: "Terms",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function MyBanksStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MyBanks"
//         component={MyBanks}
//         options={{
//           title: "My Banks",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function HomeStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: "Home",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function ScanCodeStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ScanCode"
//         component={ScanCode}
//         options={{
//           title: "Scan Code",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function PaymentHistoryStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="PaymentHistory"
//         component={PaymentHistory}
//         options={{
//           title: "Payment History",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function BankDepositStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="BankDeposit"
//         component={BankDeposit}
//         options={{
//           title: "Bank Deposit",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function BankTransferStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="BankTransfer"
//         component={BankTransfer}
//         options={{
//           title: "Bank Transfer",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function MoneyTransferStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MoneyTransfer"
//         component={MoneyTransfer}
//         options={{
//           title: "Money Transfer",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function MyAccountStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MyAccount"
//         component={MyAccount}
//         options={{
//           title: "My Account",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function HelpStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Help"
//         component={Help}
//         options={{
//           title: "Help",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: (props) => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function InviteFriendsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="InviteFriends"
//         component={InviteFriends}
//         options={{
//           title: "Invite Friends",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function FavouritesStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Favourites"
//         component={Favourites}
//         options={{
//           title: "Favourites",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function ApprovalsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Approvals"
//         component={TopTabScreens}
//         options={{
//           title: "My Approvals",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function PromotionsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Promotions"
//         component={Promotions}
//         options={{
//           title: "Promotions",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function AddPayeeStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="AddPayee"
//         component={AddPayee}
//         options={{
//           title: "Add Payee",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function PayeeListStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="PayeeList"
//         component={PayeeList}
//         options={{
//           title: "Payee List",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function RewardsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Rewards"
//         component={Rewards}
//         options={{
//           title: "Rewards",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// export function ContactUsStack(props) {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ContactUs"
//         component={ContactUs}
//         options={{
//           title: "Contact Us",
//           headerLeft: () => (
//             <Icon.Entypo
//               name={"menu"}
//               color={Color.gray}
//               size={30}
//               onPress={() => props.navigation.openDrawer()}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//           headerRight: () => (
//             <Icon.MaterialCommunityIcons
//               name={"bell"}
//               color={Color.blueIconColor}
//               size={30}
//               onPress={() => console.log("bell icon clicked")}
//               style={{ marginHorizontal: 20 }}
//             />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

import Button from "./Button";
import CheckBox from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";
import {DateRange, DatePicker, DateTimePicker} from "./datePicker/index";
import {dialog, ConfirmDialog} from "./dialog";
import {Select, Option} from "./select";
import FixedBottom from "./FixedBottom";
import Form from "./Form";
import FormInput from "./FormInput";
import FormItem from "./FormItem";
import FormLabel from "./FormLabel";
import FormControl from "./FormControl";
import FormTitle from "./FormTitle";
import LinkButton from "./LinkButton";
import HrefButton from "./HrefButton";
import loading from "./Loading";
import {messager, Message} from "./message";
import Modal from "./Modal";
import NumberTextBox from "./NumberTextBox";
import Pagination from "./Pagination";
import Radio from "./Radio";
import Scroll from "./Scroll";
import SerachTextBox from "./SerachTextBox";
import Textarea from "./Textarea";
import TextBox from "./TextBox";
import Trigger from "./Trigger";
import Switch from "./Switch";
import Icon from "./icon";
import Tab, {TabPane} from "./tab";
import {Row, Col, Toolbar} from "./layout";
import Empty from "./Empty";
import Popover from "./Popover";
import AutoComplete from "./autoComplete/AutoComplete";
import Align from "./Align";
import Menu from "./menu";
import Table from "./table";
import KeyCode from "./KeyCode";
import Progress from "./progress";
import Steps from "./steps";

import "./css/ui.css";
import "./scss/variables.scss";

Object.assign(Form, FormInput);

export {
    Radio,
    SerachTextBox,
    Textarea,
    TextBox,
    NumberTextBox,
    CheckBox,
    CheckBoxGroup,
    DatePicker,
    DateRange,
    DateTimePicker,
    Select,
    Option,
    Menu,
    Table,

    Button,
    FixedBottom,
    Form,
    FormInput,
    FormItem,
    FormLabel,
    FormControl,
    FormTitle,
    LinkButton,
    HrefButton,
    Modal,
    Pagination,
    Scroll,
    Trigger,
    Popover,
    AutoComplete,
    Align,

    loading,
    dialog,
    ConfirmDialog,
    Message,
    messager,
    Switch,
    Icon,
    Tab,
    TabPane,
    Row,
    Col,
    Toolbar,
    Empty,
    Progress,
    Steps,

    KeyCode
}
// export * from "./dropdown";
// export * from "./utility";
// export * from "./badge";
// export * from "./collapse";
// export * from "./tree";
// export * from "./position";
// export * from "./treeSelect";
// export * from "./upload";
interface CalendarProps {
    prefixCls: string;
    className: string;
    style: { [key: string]: any; };
    value: moment.Moment;
    defaultValue: moment.Moment;
    locale: Object;
    format: String;
    disabledDate(current: moment.Moment): Boolean;
    disabledTime(current: moment.Moment): Object;
    showDateInput: boolean;
    showWeekNumber: boolean;
    showToday: boolean;
    showOk: boolean;
    timePicker: __React.ReactElement<any>;
    onSelect(date: moment.Moment);
    onChange(date: moment.Moment);
    dateInputPlaceholder: string;
}

declare class Calendar extends __React.Component<CalendarProps, {}> { }

interface PickerProps {
    prefixCls: string;
    calendar: Calendar;
    disabled: boolean;
    placement: string | Object;
    align: Object;
    animation: string;
    transitionName: string;
    value: moment.Moment | moment.Moment[];
    defaultValue: moment.Moment | moment.Moment[];
    onChange: Function;
    onOpen: Function;
    onClose: Function;
    open: boolean;
    getCalendarContainer: () => Element;
}
declare class Picker extends __React.Component<PickerProps, {}> { }

interface Locale {
    today: string;
    now: string;
    backToToday: string;
    ok: string;
    clear: string;
    month: string;
    year: string;
    timeSelect: string;
    dateSelect: string;
    monthSelect: string;
    yearSelect: string;
    decadeSelect: string;
    yearFormat: string;
    dateFormat: string;
    dayFormat: string;
    dateTimeFormat: string;
    monthFormat: string;
    monthBeforeYear: string;
    previousMonth: string;
    nextMonth: string;
    previousYear: string;
    nextYear: string;
    previousDecade: string;
    nextDecade: string;
    previousCentury: string;
    nextCentury: string;
}

declare module 'rc-calendar' {
    let Calendar: Calendar;
    export default Calendar;
}

declare module 'rc-calendar/lib/Picker' {
    let Picker: Picker;
    export default Picker;
}

declare module 'rc-calendar/lib/locale/de_DE' {
    export default Locale;
}

declare module 'rc-calendar/lib/locale/en_US' {
    export default Locale;
}

declare module 'rc-calendar/lib/locale/ja_JP' {
    export default Locale;
}

declare module 'rc-calendar/lib/locale/pl_PL' {
    export default Locale;
}

declare module 'rc-calendar/lib/locale/ru_RU' {
    export default Locale;
}

declare module 'rc-calendar/lib/locale/zh_CN' {
    export default Locale;
}

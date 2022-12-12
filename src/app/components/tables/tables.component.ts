import { Component } from '@angular/core';
import { TableColumn } from 'cic-package-test';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  constructor() {}
  clicked(e: any) {
    console.log(e);
  }
  infrastructureHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Facility Description EN',
      type: 'text',
      dataKey: 'fDescEn',
    },
    { title: 'Facility Description EN', type: 'text', dataKey: 'fDescAr' },
    { title: 'Distance', type: 'text', dataKey: 'distance' },
    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  usageHeaders: Array<TableColumn> = [
    { title: 'Category Code', type: 'text', dataKey: 'categoryCode' },

    { title: 'Code', type: 'text', dataKey: 'code' },
    { title: 'Usage Type En', type: 'text', dataKey: 'usageTypeEn' },
    { title: 'Usage Type Ar', type: 'text', dataKey: 'usageTypeAr' },
    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  locationHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Location Description En',
      type: 'text',
      dataKey: 'locationDescEn',
    },
    {
      title: 'Location Description Ar',
      type: 'text',
      dataKey: 'locationDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  compoundHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Compound Features Description En',
      type: 'text',
      dataKey: 'compoundDescEn',
    },
    {
      title: 'Compound Features Description Ar',
      type: 'text',
      dataKey: 'compoundDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  languageHeaders: Array<TableColumn> = [
    {
      title: 'Language Key',
      type: 'text',
      dataKey: 'lang',
    },
    { title: 'Code', type: 'text', dataKey: 'code' },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  classHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Class',
      type: 'text',
      dataKey: 'class',
    },
    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  viewHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'View Description En',
      type: 'text',
      dataKey: 'viewDescEn',
    },
    {
      title: 'View Description Ar',
      type: 'text',
      dataKey: 'viewDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  paymentHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Condition Type Description En',
      type: 'text',
      dataKey: 'condDescEn',
    },
    {
      title: 'Condition Type Description Ar',
      type: 'text',
      dataKey: 'condDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  floorHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Floor Category En',
      type: 'text',
      dataKey: 'floorDescEn',
    },
    {
      title: 'Floor Category Ar',
      type: 'text',
      dataKey: 'floorDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  unitHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Unit Status',
      type: 'text',
      dataKey: 'status',
    },
    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  launchHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Launch Type Description En',
      type: 'text',
      dataKey: 'launchDescEn',
    },
    {
      title: 'Launch Type Description Ar',
      type: 'text',
      dataKey: 'launchDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  finishHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Finishing Status',
      type: 'text',
      dataKey: 'status',
    },
    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];
  categoryHeaders: Array<TableColumn> = [
    { title: 'Code', type: 'text', dataKey: 'code' },
    {
      title: 'Category Type Description En',
      type: 'text',
      dataKey: 'categoryDescEn',
    },
    {
      title: 'Category Type Description Ar',
      type: 'text',
      dataKey: 'categoryDescAr',
    },

    {
      title: '',
      type: 'button',
      btnConfig: [
        {
          label: 'Delete',
          event: 'delete',
          severity: 'danger',
          isOutline: true,
          class: 'btn-secondary btn',
          isRounded: true,
        },
        {
          label: 'Edit',
          event: 'edit',
          severity: 'danger',
          class: 'btn-primary btn',
          isRounded: true,
        },
      ],
    },
  ];

  categoryData = [
    {
      code: '19000',
      categoryDescEn: 'Administrative',
      categoryDescAr: 'اداري',
    },
    {
      code: '19000',
      categoryDescEn: 'Administrative',
      categoryDescAr: 'اداري',
    },
    {
      code: '19000',
      categoryDescEn: 'Administrative',
      categoryDescAr: 'اداري',
    },
    {
      code: '19000',
      categoryDescEn: 'Administrative',
      categoryDescAr: 'اداري',
    },
    {
      code: '19000',
      categoryDescEn: 'Administrative',
      categoryDescAr: 'اداري',
    },
  ];
  finishData = [
    { code: '19000', status: 'Core & Shell' },
    { code: '19000', status: 'Core & Shell' },
    { code: '19000', status: 'Core & Shell' },
    { code: '19000', status: 'Core & Shell' },
    { code: '19000', status: 'Core & Shell' },
    { code: '19000', status: 'Core & Shell' },
  ];
  launchData = [
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
    {
      code: '19000',
      launchDescEn: 'Pre-launch',
      launchDescAr: 'ما قبل الاطلاق',
    },
  ];
  infraStructureData = [
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
    {
      code: '19000',
      fDescEn: 'Medical',
      fDescAr: 'طبي',
      distance: '20 Mins By Car',
    },
  ];
  usageData = [
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
    {
      categoryCode: '190000',
      code: '190001',
      usageTypeEn: 'Apartment',
      usageTypeAr: 'شقه',
    },
  ];
  locationData = [
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
    {
      code: '19000',
      locationDescEn: 'New Cairo',
      locationDescAr: 'القاهره الجديده',
    },
  ];
  compoundData = [
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
    {
      code: '19000',
      compoundDescEn: 'Security Camera',
      compoundDescAr: 'كاميرا مراقبه',
    },
  ];
  languageData = [
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
    { lang: 'En', code: '123456' },
  ];
  viewData = [
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
    { code: '19000', viewDescEn: 'Lake', viewDescAr: 'بحيره' },
  ];
  classData = [
    { class: 'S', code: '19000' },
    { class: 'S', code: '19000' },
    { class: 'S', code: '19000' },
    { class: 'S', code: '19000' },
    { class: 'S', code: '19000' },
    { class: 'S', code: '19000' },
  ];
  paymentData = [
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
    {
      code: '19000',
      condDescAr: 'عقد تقسيط',
      condDescEn: 'Installment Contract',
    },
  ];
  floorData = [
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
    { code: '19000', floorDescEn: 'Typical Floor', floorDescAr: 'دور نموذجي' },
  ];
  unitData = [
    { code: '19000', status: 'Available' },
    { code: '19000', status: 'Available' },
    { code: '19000', status: 'Available' },
    { code: '19000', status: 'Available' },
    { code: '19000', status: 'Available' },
  ];
}

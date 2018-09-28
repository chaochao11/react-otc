import React, { Fragment } from 'react';
import { FormattedMessage } from 'umi/locale';
import { Button, Icon, Card } from 'antd';
import Result from '@/components/Result';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 16,
      }}
    >
      <FormattedMessage
        id="app.result.error.hint-title"
        defaultMessage="The content you submitted has the following error:"
      />
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />
      <FormattedMessage
        id="app.result.error.hint-text1"
        defaultMessage="Your account has been frozen"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="app.result.error.hint-btn1" defaultMessage="Thaw immediately" />
        <Icon type="right" />
      </a>
    </div>
    <div>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />
      <FormattedMessage
        id="app.result.error.hint-text2"
        defaultMessage="Your account is not yet eligible to apply"
      />
      <a style={{ marginLeft: 16 }}>
        <FormattedMessage id="app.result.error.hint-btn2" defaultMessage="Upgrade immediately" />
        <Icon type="right" />
      </a>
    </div>
  </Fragment>
);

const actions = (
  <Button type="primary">
    <FormattedMessage id="app.result.error.btn-text" defaultMessage="Return to modify" />
  </Button>
);

export default () => (
  <PageHeaderWrapper>
    <Card bordered={false}>
      <Result
        type="error"
        title="提交失败"
        description="请核对并修改以下信息后，再重新提交。"
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderWrapper>
);
import { FC, useCallback, useState } from 'react';
import { PageBlock } from '@lib/cms/types/page';
import PageTitle from '@components/ui/PgaeTitle';
import { Button } from '@components/ui';
import { Checkbox, Col, Form, Input, message, Row, Upload } from 'antd';
import dynamic from 'next/dynamic';
const CmsBlocks = dynamic(() => import('@components/common/CmsBlocks'));

import s from './ContactUs.module.css'


type DataType = {
  blocks: PageBlock[],
}

const ContactUs:FC<DataType> = ({ blocks }) => {

  const [ form ] = Form.useForm()
  const [uploadedSize, setUploadedSize] = useState<number>(0)

  const onNormalizeFile = useCallback((e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  }, []);

  const onFinish = useCallback((values: any) => {
    console.log('Success:', values);
    form.resetFields()
    setUploadedSize(0)
  }, []);

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, []);

  return (
    <div>
      <PageTitle title="Contact Us"/>
      <div className={s.wrapper}>
        <Row>
          <Col span={24} lg={{span: 12}}>
            <div className={s.form}>
              <p className={s.text}>Get in touch with us for any inquiries. We will contact you back as soon as
                possible</p>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={24}>
                  <Col span={24} lg={{span: 12}}>
                    <Form.Item
                      label={<span className="font-bold">Name</span>}
                      name="name"
                      rules={[ { required: true, message: 'Is required.' } ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      label={<span className="font-bold">Email</span>}
                      name="email"
                      rules={[ { required: true, message: 'Is required.' } ]}
                    >
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={24} lg={{span: 12}}>
                    <Form.Item
                      label={<span className="font-bold">Phone</span>}
                      name="phone"
                      rules={[ { required: true, message: 'Is required.' } ]}
                    >
                      <Input/>
                    </Form.Item>
                    <Form.Item
                      label={<span className="font-bold">Company</span>}
                      name="company"
                      rules={[ { required: true, message: 'Is required.' } ]}
                    >
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label={<span className="font-bold">Your Message</span>}
                      name="message"
                      rules={[ { required: true, message: 'Is required.' } ]}
                    >
                      <Input.TextArea showCount maxLength={400} />
                    </Form.Item>
                    <p className={s.text}>Required fields are marked *</p>
                    <div className={s.upload}>
                      <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={onNormalizeFile}
                      >
                        <Upload.Dragger
                          beforeUpload={(file) => {
                            if(uploadedSize + file.size < 1e7) {
                              setUploadedSize( prevState => prevState + file.size)
                              return true
                            } else {
                              message.error('uploads files don`t should be most 10Mb')
                              return Upload.LIST_IGNORE;
                            }
                          }}
                          onRemove={(file) => {
                            if(file){
                              setUploadedSize(prevState => prevState - file.size!)
                              return true
                            }
                            return false
                          }}
                          name="upload"
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="text"
                          multiple
                          maxCount={3}
                        >
                          Drag & drop or
                          <span style={{color: '#FF4A17', paddingLeft: '8px'}}>browse</span>
                          <p>Max. files: 3</p>
                        </Upload.Dragger>
                      </Form.Item>
                      <Form.Item
                        name="privacy"
                        valuePropName="checked"
                        rules={[ { required: true, message: 'Is required.' } ]}
                      >
                        <Checkbox>
                          By submitting this completed form, I give my consent to process my personal data as set out in the
                          <a href='https://www.amitechgrp.com/privacy-policy' className={s.privacy}>Privacy Police</a>
                          . For more details please contact info@amitechgrp.com
                        </Checkbox>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Button type="submit" variant="secondary">CONTACT US</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col span={24} lg={{span: 10, offset: 2}}>
            <div className={s.info}>
              <CmsBlocks items={blocks}/>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContactUs
//
//  WhiteRoomConfig.h
//  WhiteSDK
//
//  Created by yleaf on 2019/3/30.
//

#import "WhiteObject.h"
#import "WhiteMemberInformation.h"
#import "WhiteCameraBound.h"
#import "WhiteConsts.h"

NS_ASSUME_NONNULL_BEGIN

/** 
 配置实时房间的参数。 

 **Note:** 
 
 `WhiteRoomConfig` 类中所有的方法都必须在加入房间前调用；成功加入房间后，调用该类中的任何方法都不会生效。
 */
@interface WhiteRoomConfig : WhiteObject

/**
 设置房间 UUID 并初始化 `WhiteRoomConfig` 对象。
 @param uuid 房间 UUID，即房间唯一标识符。
 @param roomToken 用于鉴权的 Room Token。生成该 Room Token 的房间 UUID 必须和上面传入的房间 UUID 一致。
 @return 初始化的 `WhiteRoomConfig` 对象。
 */
- (instancetype)initWithUuid:(NSString *)uuid roomToken:(NSString *)roomToken;
/**
 该方法已废弃。请使用 [initWithUuid:roomToken:userPayload:]([WhiteRoomConfig initWithUuid:roomToken:userPayload:])。

 设置房间 UUID 和用户信息并初始化 `WhiteRoomConfig` 对象。
 @param uuid 房间 UUID，即房间唯一标识符。
 @param roomToken 用于鉴权的 Room Token。生成该 Room Token 的房间 UUID 必须和上面传入的房间 UUID 一致。
 @param memberInfo 用户信息。
 @return 初始化的 `WhiteRoomConfig` 对象。
 */
- (instancetype)initWithUuid:(NSString *)uuid roomToken:(NSString *)roomToken memberInfo:(WhiteMemberInformation * _Nullable)memberInfo  __attribute__((deprecated("memberInfo is deprecated, please use userPayload")));
/**
 设置房间 UUID 和用户信息并初始化 `WhiteRoomConfig` 对象。
 @param uuid 房间 UUID，即房间唯一标识符。
 @param roomToken 用于鉴权的 Room Token。生成该 Room Token 的房间 UUID 必须和上面传入的房间 UUID 一致。
 @param userPayload 自定义用户信息。
 */
- (instancetype)initWithUuid:(NSString *)uuid roomToken:(NSString *)roomToken userPayload:(id _Nullable)userPayload NS_DESIGNATED_INITIALIZER;

/** 房间 UUID，即房间唯一标识符。 */
@property (nonatomic, copy) NSString *uuid;
/** 用于鉴权的 Room Token。 */
@property (nonatomic, copy) NSString *roomToken;

/** 
 互动白板房间所在的数据中心。

 数据中心包括：

 - `"cn-hz"`：中国杭州。该数据中心为其他数据中心服务区未覆盖的地区提供服务。
 - `"us-sv"`：美国硅谷。该数据中心为北美洲、南美洲地区提供服务。
 - `"in-mum"`：印度孟买。该数据中心为印度地区提供服务。
 - `"sg"`：新加坡。该数据中心为新加坡、东亚、东南亚地区提供服务。
 - `"gb-lon"`：英国伦敦。该数据中心为欧洲地区提供服务。
 
 @since 2.11.0 */
@property (nonatomic, strong, nullable) WhiteRegionKey region;

/**
 禁止/允许工具响应用户输入。

 - `YES`：禁止工具响应用户输入。
 - `NO`：（默认）允许工具响应用户输入。
 */
@property (nonatomic, assign) BOOL disableDeviceInputs;

/**
 禁止/允许本地用户操作白板的视角，包括缩放和移动视角。

 - `YES`：禁止本地用户操作白板视角。
 - `NO`：（默认）允许本地用户操作白板视角。
 */
@property (nonatomic, assign) BOOL disableCameraTransform;

/**
 是否关闭贝塞尔曲线优化。

 - `YES`：关闭贝塞尔曲线优化。
 - `NO`：（默认）开启贝塞尔曲线优化。
 */
@property (nonatomic, assign) BOOL disableBezier;

/**
 该方法已废弃。请使用 [disableDeviceInputs]([WhiteRoom disableDeviceInputs:]) 和 [disableCameraTransform]([WhiteDisplayer disableCameraTransform:])。

 允许/禁止白板响应用户任何操作。

 禁止白板响应用户任何操作后，用户无法使用工具输入内容，也无法对白板进行视角缩放和视角移动。
 */
@property (nonatomic, assign) BOOL disableOperations __attribute__((deprecated("please use disableDeviceInputs and disableCameraTransform")));

/**
 是否关闭橡皮擦擦除图片功能。

 - `YES`：橡皮擦不可以擦除图片。
 - `NO`：（默认）橡皮擦可以擦除图片。
 */
@property (nonatomic, assign) BOOL disableEraseImage;

/**
 本地用户的视角边界。详见 [WhiteCameraBound](WhiteCameraBound)。
 */
@property (nonatomic, strong, nullable) WhiteCameraBound *cameraBound;

/**
 自定义的用户信息，可以为 JSON、NSString、NSNumber 格式，推荐格式为 NSDictionary。

 **Note:**

 - 必须使用 `WhiteRoomConfig` 子类，以保证字段结构正确。
 - 自定义的用户信息会被完整透传。
 如果要在白板房间中显示用户头像，请在 `userPayload` 中传入 `avatar` 字段并添加用户头像的地址，例如 "avatar", "https://example.com/user.png")。
 - 从 [WhiteMemberInformation](WhiteMemberInformation) 迁移，只需要在 `userPayload` 中，传入相同字段即可。
 */
@property (nonatomic, copy, nullable) id userPayload;

/**
 已废弃，请使用 `userPayload`。

 自定义的用户信息。
 */
@property (nonatomic, copy, nullable) WhiteMemberInformation *memberInfo __attribute__((deprecated("memberInfo is deprecated, please use userPayload")));

/**
 用户是否以互动模式加入白板房间。

 在加入房间后，也可以通过 [setWritable]([WhiteRoom setWritable:completionHandler:]) 方法切换读写模式。

 - `YES`：以互动模式加入白板房间，即具有读写权限。
 - `NO`：以订阅模式加入白板房间，即具有只读权限。不能操作工具、修改房间状态，当前用户也不会出现在 `roomMembers` 列表中。
 */
@property (nonatomic, assign) BOOL isWritable;

/**
 关闭/开启笔锋效果。

 @since 2.12.2

 **Note:**

  - 在 2.12.2 版本中，默认值为 `NO`，自 2.12.3 版本起，默认值改为 `YES`。
  - 为正常显示笔迹，在开启笔峰效果前，请确保该房间内的所有用户使用如下 SDK：
    - Android SDK 2.12.3 版或之后
    - iOS SDK 2.12.3 版或之后
    - Web SDK 2.12.5 版或之后

 - `YES`: （默认）关闭笔锋效果。
 - `NO`: 开启笔锋效果。
 */
@property (nonatomic, assign) BOOL disableNewPencil;


/**
 加入房间的超时时间。单位为毫秒。

 SDK 超时后会主动断连，并触发 [firePhaseChanged]([WhiteRoomCallbackDelegate firePhaseChanged:]) 回调。同时触发 [fireDisconnectWithError]([WhiteRoomCallbackDelegate fireDisconnectWithError:]) 回调并返回”重连时长超出 xx 毫秒”的提示。
 */
@property (nonatomic, strong) NSNumber *timeout;

@end

NS_ASSUME_NONNULL_END

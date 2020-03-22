//
//  WhitePureReplayViewController.h
//  Whiteboard_Example
//
//  Created by yleaf on 2020/3/22.
//  Copyright © 2020 leavesster. All rights reserved.
//

#import "WhiteBaseViewController.h"

NS_ASSUME_NONNULL_BEGIN

typedef void(^PlayBlock)(WhitePlayer * _Nullable player, NSError * _Nullable eroror);

@interface WhitePureReplayViewController : WhiteBaseViewController

#pragma mark - Unit Testing
@property (nonatomic, copy, nullable) PlayBlock playBlock;

#pragma mark - CallbackDelegate
@property (nonatomic, weak, nullable) id<WhitePlayerEventDelegate> eventDelegate;


@end

NS_ASSUME_NONNULL_END

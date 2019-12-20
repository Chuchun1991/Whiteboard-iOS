//
//  WhiteRoom+Private.h
//  WhiteSDK
//
//  Created by yleaf on 2019/7/23.
//

#import "WhiteRoom.h"

NS_ASSUME_NONNULL_BEGIN

@interface WhiteRoom ()

@property (nonatomic, strong, readwrite) NSNumber *observerId;

- (instancetype)initWithUuid:(NSString *)uuid bridge:(WhiteBoardView *)bridge NS_UNAVAILABLE;
- (instancetype)initWithUuid:(NSString *)uuid bridge:(WhiteBoardView *)bridge state:(WhiteRoomState *)roomState;
- (void)updatePhase:(WhiteRoomPhase)phase;
- (void)updateRoomState:(WhiteRoomState *)state;

@end

NS_ASSUME_NONNULL_END